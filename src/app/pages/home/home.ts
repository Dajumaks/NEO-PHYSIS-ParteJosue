import {
  Component, OnInit, OnDestroy,
  AfterViewInit, ElementRef,
  QueryList, ViewChildren, ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../core/services/posts';
import { Post, CarouselSlide, Sugerencia } from '../../core/models/post.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, AfterViewInit, OnDestroy {

  slides: CarouselSlide[] = [];
  posts: Post[] = [];
  sugerencias: Sugerencia[] = [];
  tabActivo: 'reciente' | 'popular' = 'reciente';

  currentSlide = 0;
  readonly AUTOPLAY_DELAY = 4000;
  private autoPlayInterval: ReturnType<typeof setInterval> | null = null;
  private observer!: IntersectionObserver;

  @ViewChildren('animTarget') animTargets!: QueryList<ElementRef>;

  constructor(
    private router: Router,
    private postsService: PostsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.slides = this.postsService.getSlides();
    this.posts = this.postsService.getPosts();
    this.sugerencias = this.postsService.getSugerencias();
    this.startAutoPlay();
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          this.observer.unobserve(e.target);
        }
      }),
      { threshold: 0.15 }
    );
    this.animTargets.forEach(el => this.observer.observe(el.nativeElement));
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
    if (this.observer) this.observer.disconnect();
  }

  goToSlide(index: number): void {
    this.currentSlide = (index + this.slides.length) % this.slides.length;
  }

  nextSlide(): void { this.goToSlide(this.currentSlide + 1); }
  prevSlide(): void { this.goToSlide(this.currentSlide - 1); }
  pauseAutoPlay(): void { this.stopAutoPlay(); }
  resumeAutoPlay(): void { this.startAutoPlay(); }

  cambiarTab(tab: 'reciente' | 'popular'): void {
    this.tabActivo = tab;
    this.sugerencias = [...this.postsService.getSugerencias()]
      .sort((a, b) => tab === 'popular' ? b.votos - a.votos : a.id - b.id);
  }

  votar(s: Sugerencia, dir: 1 | -1): void {
    s.votos += dir;
  }

  votarPost(post: Post, dir: 1 | -1): void {
    post.votos += dir;
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
      this.cdr.markForCheck();
    }, this.AUTOPLAY_DELAY);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  trackById(_: number, item: { id: number }): number { return item.id; }
}