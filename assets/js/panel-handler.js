document.addEventListener('DOMContentLoaded', function() {
    const panel = document.querySelector('.right-side-panel');
    const overlay = document.querySelector('.modal-overlay');
    const articles = document.querySelectorAll('#two .work-item');
    let currentIndex = 0;

    // Add these new variables at the top
    let scrollPosition = 0;
    const html = document.documentElement;
    
    // Calculate scrollbar width once
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    html.style.setProperty('--scrollbar-width', `${scrollBarWidth}px`);

    // Content mapping for all projects
    const projectContent = {
        'BYU_CMR': {
            title: "BYU CMR Master's Student",
            content: `
                <div class="panel-inner">
                    <h2>BYU CMR Master's Research</h2>
                    <p>I'm currently conducting graduate research in the Compliant Mechanisms and Robotics Lab. My research focuses on:</p>
                    <ul>
                        <li>Designing novel compliant geometries for strain energy storage and
                        optimizing them for maximum energy density.</li>  
                        <li>Developing a dynamic model for and prototyping a compliant mechanism-driven
                        mechanical battery to validate and explore its performance. </li>
                        <li>Characterizing and implementing a brushed DC motor for electromagnetic transduction
                        of strain energy stored in compliant mechanisms.</li>
                    </ul>
                    <p>My responsiblities include managing a team of undergraduate researchers. We meet weekly
                    to discuss progress on efforts involving experimental testing, prototyping, and nonlinear FEA.
                    I also work closely with my research advisor, Dr. Brian Jensen, in our research efforts. We have one
                    publication in which I am a co-author:
                    <p><a href="https://asmedigitalcollection.asme.org/mechanismsrobotics/article-abstract/17/6/061005/1209222/Full-Forward-Solution-of-Large-Deflection-End" 
                    // target="_blank">Full Forward Solution of Large Deflection, End Loaded Cantilever Beams Using Elliptic Integrals</a></p>
                    Other publications are currently in preparation.</p>
                </div>
            `
        },
        'HP_Logo_1': {
            title: "3D Polymers Factory Intern",
            content: `
                <div class="panel-inner">
                    <h2>HP 3D Polymers Factory Intern</h2>
                    <p>In the summer of 2023, I was priveledged to be an intern at HP Inc in Corvallis, Oregon for the second time.
                    I worked with HP Inc.'s Multijet Fusion 3D printing polymers division. My work involved the following:</p>
                    <ul>
                        <li>I designed a bulk powder transport system for use in the HP Inc. 3D AMS Factory
                        to achieve cost goals and enable business verticals.</li>
                        <li>I built a manual dye system for dyeing 3D-printed TPU and PA12 parts.</li>
                    </ul>
                    <img src="images/HP Corvallis.jpg" style="width: 100%; margin: 20px 0;">
                </div>
            `
        },
        'CrunchLabs_CMR': {
            title: "CrunchLabs & BYU Project Research Assistant",
            content: `
                <div class="panel-inner">
                    <h2>BYU CMR Research Project</h2>
                    <p>In the summer of 2023, CrunchLabs (directed by famous YouTuber Mark Rober) partnered with
                    BYU's Compliant Mechanisms and Robotics Lab to develop a compliant micro-mechanism dart blaster.
                    The resulting design was a single-piece geometry grown from carbon nanotubes that was designed
                    from start to finish in under four months. My work involved: </p>
                    <li>Conducting a designed experiment to identify improvements in manufacturing
                    parameters for the compliant micro-mechanism dart blaster.</li>
                    <li>Operating a photolithography mask aligner, thermal evaporator, an e-beam evaporator,
                    and a carbon nanotube furnace to produce carbon nanotube growth samples.</p>

                    <p>The project was featured in a video on Mark Rober's YouTube channel:</p>
                    <div class="video-container">
                        <iframe width="100%" 
                                height="315" 
                                src="https://www.youtube.com/embed/9c2NqlUWZfo" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen></iframe>
                    </div>
                </div>
            `
        },
        'BYU_ME_1': {
            title: "BYU-USAFA Cooperative Capstone Engineer",
            content: `
                <div class="panel-inner">
                    <h2>BYU-USAFA Capstone Project</h2>
                    <p>In the final year of my bachelor's degree in mechanical engineering at BYU,
                    I was priveledged to particiapte in BYU's Capstone Program. My project was with
                    a collaborative project between BYU and the US Air Force Academy. Our team consisted
                    of 2 BYU students and 3 USAFA cadets. We worked on the following:</p>
                    <ul>
                        <li>Developed improvements for and tested the mixing of energetic materials with a
                        collaborative team of students from BYU and the US Air Force Academy.</li>
                        <li>Formally presented design recommendations to USAFA and Air Force Research
                        Labs military leadership.</li>
                    </ul>
                </div>
            `
        },
        'HP_Logo_2': {
            title: "Product Design and Tooling Intern",
            content: `
                <div class="panel-inner">
                    <h2>HP Product Design Internship</h2>
                    <p>In the summer of 2022, I was priveledged to be an intern at HP Inc in Corvallis, Oregon.
                    I worked printing polymers division. My work involved the following:</p>
                    <ul>
                        <li>Characterized multiple adhesives under conditions of elevated temperature and
                        pressure to identify solutions for foil delamination in a medical product.</li>
                        <li>Injection molded and machined proposed changes to product architecture and tested
                        those changes to measure their impact on product performance.</li>
                    </ul>
                    <img src="images/HP Corvallis 2.jpg" style="width: 100%; margin: 20px 0;">
                </div>
            `
        },
        'BYU_ME_2': {
            title: "Fluid and Thermal Transport Lab Research Assistant",
            content: `
                <div class="panel-inner">
                    <h2>Fluid and Thermal Transport Research</h2>
                    <p>For a year and a half as an undergraduate student, I was blessed to work as a
                    research assistant in BYU's Fluidic and Thermal Transport Lab. My research involved the following:</p>
                    <ul>
                        <li>Researched aerodynamic interactions of propellers using stereoscopic particle
                        image velocimetry in a wind tunnel.</li>
                        <li>Calibrated imaging hardware daily, built experimental setups, and interpreted
                        data to provide accurate data acquisition.</li>
                    </ul>

                    <div class="gif-container" style="display: flex; flex-direction: column; gap: 20px; margin: 20px 0; align-items: center;">
                        <figure style="margin: 0; text-align: center; width: 100%;">
                            <img src="images/Single.gif" style="width: 90%; display: block; margin: 0 auto;">
                            <figcaption style="text-align: center; margin-top: -20px;">Single propeller wake visualization showing vortex formation</figcaption>
                        </figure>
                        <figure style="margin: 0; text-align: center; width: 100%;">
                            <img src="images/Dual_InPhase.gif" style="width: 90%; display: block; margin: 0 auto;">
                            <figcaption style="text-align: center; margin-top: -20px;">Dual propeller interaction with blades rotating in phase</figcaption>
                        </figure>
                        <figure style="margin: 0; text-align: center; width: 100%;">
                            <img src="images/Dual_OutOfPhase.gif" style="width: 90%; display: block; margin: 0 auto;">
                            <figcaption style="text-align: center; margin-top: -20px;">Dual propeller interaction with blades rotating out of phase</figcaption>
                        </figure>
                    </div>
                    
                    <p>The GIFs above illustrate the data we collected using particle image velocimetry, demonstrating
                    the complex flow patterns and vortex formations in propeller wake interactions. This research
                    contributes to our understanding of multi-rotor aircraft aerodynamics like eVTOL and will potentially 
                    optimize drone designs for better efficiency.</p>
                </div>
            `
        }
    };

    // Handle article clicks
    articles.forEach((article, index) => {
        const link = article.querySelector('a');
        link.addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = index;
            openPanel(article);
        });
    });

    // Close panel
    document.querySelector('.panel-close').addEventListener('click', closePanel);

    // Navigation
    document.querySelector('.nav-prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            openPanel(articles[currentIndex]);
        }
    });

    document.querySelector('.nav-next').addEventListener('click', () => {
        if (currentIndex < articles.length - 1) {
            currentIndex++;
            openPanel(articles[currentIndex]);
        }
    });

    // Modified openPanel function to use projectContent
    function openPanel(article, isNavigation = false) {
        const articleId = article.querySelector('a').id;
        const content = projectContent[articleId].content;
        
        // Store current scroll position
        scrollPosition = window.scrollY;
        
        document.querySelector('.panel-content').innerHTML = content;
        panel.classList.add('active');
        overlay.style.display = 'block';
        document.body.classList.add('panel-open');
        document.body.style.top = `-${scrollPosition}px`;

        if (!isNavigation) {
            history.pushState({ panelOpen: true, articleId: articleId }, '', `#${articleId}`);
        } else {
            history.replaceState({ panelOpen: true, articleId: articleId }, '', `#${articleId}`);
        }
    }

    function closePanel() {
        panel.classList.remove('active');
        overlay.style.display = 'none';
        document.body.classList.remove('panel-open');
        
        // Restore scroll position
        document.body.style.top = '';
        window.scrollTo(0, scrollPosition);

        history.pushState({ panelOpen: false }, '', window.location.pathname);
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.panelOpen) {
            const article = document.querySelector(`a#${event.state.articleId}`).closest('.work-item');
            if (article) {
                // Find the index of this article
                const allArticles = Array.from(document.querySelectorAll('.work-item'));
                currentItemIndex = allArticles.indexOf(article);
                openPanel(article, true); // Pass true to indicate this is a navigation action
            }
        } else {
            closePanel();
        }
    });

    // Handle initial hash if present
    if (window.location.hash) {
        const articleId = window.location.hash.substring(1);
        const article = document.querySelector(`a#${articleId}`).closest('.work-item');
        if (article) {
            openPanel(article);
        }
    }

    // Array to store all work item IDs
    const workItems = Array.from(document.querySelectorAll('.work-item a[id]')).map(a => a.id);
    let currentItemIndex = 0;

    function navigatePanel(direction) {
        if (!workItems.length) return;

        if (direction === 'next') {
            currentItemIndex = (currentItemIndex + 1) % workItems.length;
        } else {
            currentItemIndex = (currentItemIndex - 1 + workItems.length) % workItems.length;
        }

        const nextArticleId = workItems[currentItemIndex];
        const nextArticle = document.getElementById(nextArticleId).closest('.work-item');
        
        // Update panel content
        openPanel(nextArticle, true); // Pass true to indicate this is a navigation action
    }

    // Add click handlers for navigation buttons
    document.querySelector('.nav-next').addEventListener('click', () => navigatePanel('next'));
    document.querySelector('.nav-prev').addEventListener('click', () => navigatePanel('prev'));

    // Update currentItemIndex when a work item is clicked directly
    document.querySelectorAll('.work-item a[id]').forEach((item, index) => {
        item.addEventListener('click', () => {
            currentItemIndex = index;
        });
    });

    // Update the keyboard event listener to handle vertical scrolling
    document.addEventListener('keydown', (e) => {
        // Only handle keyboard navigation when panel is open
        if (document.body.classList.contains('panel-open')) {
            const panelContent = document.querySelector('.right-side-panel');
            const scrollAmount = 100; // px to scroll per key press
            
            switch(e.key) {
                case 'ArrowRight':
                    navigatePanel('next');
                    break;
                case 'ArrowLeft':
                    navigatePanel('prev');
                    break;
                case 'ArrowUp':
                    e.preventDefault(); // Prevent default page scrolling
                    panelContent.scrollBy({
                        top: -scrollAmount,
                        behavior: 'smooth'
                    });
                    break;
                case 'ArrowDown':
                    e.preventDefault(); // Prevent default page scrolling
                    panelContent.scrollBy({
                        top: scrollAmount,
                        behavior: 'smooth'
                    });
                    break;
            }
        }
    });
});