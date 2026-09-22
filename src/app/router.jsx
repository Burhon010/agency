import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import HomePage from '@/pages/home/HomePage'
import AboutPage from '@/pages/about/AboutPage'
import PricingPage from '@/pages/pricing/PricingPage'
import FeaturesPage from '@/pages/features/FeaturesPage'
import WorkPage from '@/pages/work/WorkPage'
import CaseStudyPage from '@/pages/case-study/CaseStudyPage'
import BlogPage from '@/pages/blog/BlogPage'
import BlogPostPage from '@/pages/blog-post/BlogPostPage'
import ContactPage from '@/pages/contact/ContactPage'
import PrivacyPage from '@/pages/privacy/PrivacyPage'
import NotFoundPage from '@/pages/NotFoundPage'

/** Все страницы сайта — под общим MainLayout (шапка + футер). */
export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:caseId" element={<CaseStudyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:postId" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
