/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <HowItWorks />
      <UseCases />
      <Footer />
    </div>
  );
}




