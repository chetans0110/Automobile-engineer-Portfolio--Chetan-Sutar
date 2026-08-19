/* =========================================================
   THEME TOGGLE
========================================================= */

const themeToggle = document.getElementById("themeToggle");

/* Load saved theme */

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");

    if (themeToggle) {
        themeToggle.checked = true;
    }
}

/* Toggle theme */

if (themeToggle) {
    themeToggle.addEventListener("change", function () {

        if (this.checked) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");

        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }

    });
}


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});



/* =====================================================
   HEADER SCROLL
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   PROJECT DATA
===================================================== */

const projects = {

    suspension: {

    title:
        "Regenerative Electromagnetic Suspension System",

    description:
        "Regenerative suspension system developed to investigate vibration energy recovery through electromagnetic induction using mechanical design, electromagnetic analysis, simulation, and prototype evaluation.",

    details: `

        <h2>
            Regenerative Electromagnetic Suspension System
        </h2>


        <p class="project-intro">
            An engineering project investigating the recovery
            of electrical energy from suspension motion through
            electromagnetic induction.
        </p>


        <h3>
            Objective
        </h3>

        <p>
            To investigate the conversion of mechanical
            suspension motion into electrical energy using
            an electromagnetic energy conversion mechanism.
        </p>


        <h3>
            Engineering Work
        </h3>

        <p>
            The project involved mechanical concept development,
            CAD modeling, permanent-magnet and coil configuration,
            electromagnetic analysis, system simulation,
            and experimental evaluation.
        </p>


        <h3>
            Design & Analysis Workflow
        </h3>

        <div class="project-workflow">

            <div class="workflow-item">
                <span>1.</span>
                <strong>Concept</strong>
                <small>
                    Suspension energy recovery concept
                </small>
            </div>

            <div class="workflow-item">
                <span>2.</span>
                <strong>CAD</strong>
                <small>
                    Mechanical component and assembly modeling
                </small>
            </div>

            <div class="workflow-item">
                <span>3.</span>
                <strong>FEMM</strong>
                <small>
                    Electromagnetic analysis
                </small>
            </div>

            <div class="workflow-item">
                <span>4.</span>
                <strong>Simulation</strong>
                <small>
                    MATLAB / Simulink / Simscape modeling
                </small>
            </div>

            <div class="workflow-item">
                <span>5.</span>
                <strong>Testing</strong>
                <small>
                    Prototype and experimental evaluation
                </small>
            </div>

        </div>


        <h3>
            Tools & Technologies
        </h3>

        <div class="project-tech">

            <span>CATIA V5</span>
            <span>FEMM</span>
            <span>MATLAB</span>
            <span>Simulink</span>
            <span>Simscape</span>

        </div>

    `
},


    sidestand: {

        title:
            "Side Stand Monitoring System",

        description:
            "Mechanical monitoring mechanism developed for motorcycle side-stand safety using CAD-based mechanism design and prototype evaluation.",

        details: `

        <h2>
            Side Stand Monitoring System
        </h2>


        <p class="project-intro">
            A mechanical system developed to monitor the
            position of a motorcycle side stand and improve
            safety during vehicle operation.
        </p>


        <h3>
            Objective
        </h3>

        <p>
            To develop a mechanism capable of monitoring
            the side-stand position and improving motorcycle
            safety.
        </p>


        <h3>
            Engineering Work
        </h3>

        <p>
            The project involved mechanical concept development,
            component design, CAD modeling, mechanism evaluation,
            and prototype development.
        </p>


        <h3>
            Design & Development Workflow
        </h3>

        <div class="project-workflow">

            <div class="workflow-item">
                <span>1.</span>
                <strong>Concept</strong>
                <small>
                    Side-stand monitoring concept
                </small>
            </div>


            <div class="workflow-item">
                <span>2.</span>
                <strong>Mechanism</strong>
                <small>
                    Mechanical mechanism development
                </small>
            </div>


            <div class="workflow-item">
                <span>3.</span>
                <strong>CAD</strong>
                <small>
                    Component and assembly modeling
                </small>
            </div>


            <div class="workflow-item">
                <span>4.</span>
                <strong>Evaluation</strong>
                <small>
                    Mechanism evaluation
                </small>
            </div>


            <div class="workflow-item">
                <span>5.</span>
                <strong>Prototype</strong>
                <small>
                    Prototype development
                </small>
            </div>

        </div>


        <h3>
            Tools & Technologies
        </h3>

        <div class="project-tech">

            <span>CATIA V5</span>
            <span>Mechanical Design</span>
            <span>Automotive</span>

        </div>

    `
},


    theft: {

    title:
        "Vehicle Theft Detection & Immobilization System",

    description:
        "Automotive security system designed to authenticate authorized users and prevent unauthorized vehicle operation.",

    details: `

        <h2>
            Vehicle Theft Detection & Immobilization System
        </h2>


        <p class="project-intro">
            An automotive security prototype combining RFID-based
            user authentication with electronic vehicle
            immobilization.
        </p>


        <h3>
            Objective
        </h3>

        <p>
            To develop a prototype capable of identifying
            an authorized user and preventing vehicle
            operation when unauthorized access is detected.
        </p>


        <h3>
            System Architecture
        </h3>

        <div class="project-workflow">

            <div class="workflow-item">
                <span>1.</span>
                <strong>RFID</strong>
                <small>
                    Detects the presented RFID tag
                </small>
            </div>


            <div class="workflow-item">
                <span>2.</span>
                <strong>Arduino</strong>
                <small>
                    Processes identification data
                </small>
            </div>


            <div class="workflow-item">
                <span>3.</span>
                <strong>Authentication</strong>
                <small>
                    Evaluates authorization status
                </small>
            </div>


            <div class="workflow-item">
                <span>4.</span>
                <strong>Relay Control</strong>
                <small>
                    Controls the vehicle-operation circuit
                </small>
            </div>


            <div class="workflow-item">
                <span>5.</span>
                <strong>Immobilization</strong>
                <small>
                    Prevents unauthorized operation
                </small>
            </div>

        </div>


        <h3>
            Working Principle
        </h3>

        <p>
            The EM-18 RFID reader detects the presented RFID
            tag and sends the identification data to the
            Arduino controller.
        </p>

        <p>
            The controller evaluates the authentication status.
            An authorized tag permits vehicle operation,
            while an unauthorized tag activates the
            relay-controlled immobilization circuit.
        </p>


        <h3>
            Main Components
        </h3>

        <div class="project-tech">

            <span>Arduino Uno</span>
            <span>EM-18 RFID</span>
            <span>RFID Tag</span>
            <span>LCD Display</span>
            <span>Relay Module</span>
            <span>Bluetooth</span>
            <span>DC Motor</span>

        </div>


        <h3>
            System Workflow
        </h3>

        <p>
            RFID Authentication → Arduino Processing →
            Authorization Decision → Relay Control →
            Vehicle Operation / Immobilization
        </p>

    `
},


    catia: {

    title:
        "Mechanical CAD Design Collection",

    description:
        "A collection of mechanical components, automotive parts and engineering models developed using CATIA V5.",

    details: `

        <h2>
            Mechanical CAD Design Collection
        </h2>


        <p class="project-intro">
            A collection of mechanical and automotive components
            developed through CAD modeling practice and
            engineering design work.
        </p>


        <h3>
            Design Focus
        </h3>

        <div class="project-workflow">

            <div class="workflow-item">
                <span>1.</span>
                <strong>Component Design</strong>
                <small>
                    Mechanical component modeling
                </small>
            </div>


            <div class="workflow-item">
                <span>2.</span>
                <strong>Assembly</strong>
                <small>
                    Multi-component assembly development
                </small>
            </div>


            <div class="workflow-item">
                <span>3.</span>
                <strong>Dimensional Control</strong>
                <small>
                    Dimensions and design accuracy
                </small>
            </div>


            <div class="workflow-item">
                <span>4.</span>
                <strong>Engineering Drawing</strong>
                <small>
                    Technical drawing and documentation
                </small>
            </div>


            <div class="workflow-item">
                <span>5.</span>
                <strong>Visualization</strong>
                <small>
                    3D engineering representation
                </small>
            </div>

        </div>


        <h3>
            CAD Work
        </h3>

        <p>
            The collection includes component modeling,
            assembly development, dimensional control and
            engineering visualization.
        </p>


        <h3>
            Software
        </h3>

        <div class="project-tech">

            <span>CATIA V5</span>
            <span>3D CAD</span>
            <span>Mechanical Design</span>
            <span>Engineering Drawing</span>

        </div>

        <h3>CAD Assembly Kinemetics</h3>

<div class="simulation-slider">
    <div class="simulation-track">

        <div class="simulation-slide">
            <video autoplay muted loop playsinline>
                <source src="assets/videos/CATIA/vise-pipe.mp4" type="video/mp4">
            </video>
            <p>Vise Pipe Assembly</p>
        </div>

        <div class="simulation-slide">
            <video autoplay muted loop playsinline>
                <source src="assets/videos/CATIA/punching-machine.mp4" type="video/mp4">
            </video>
            <p>Punching Machine Assembly</p>
        </div>

        <div class="simulation-slide">
            <video autoplay muted loop playsinline>
                <source src="assets/videos/CATIA/knuckle-joint.mp4" type="video/mp4">
            </video>
            <p>Knuckle Joint Assembly</p>
        </div>

        <div class="simulation-slide">
            <video autoplay muted loop playsinline>
                <source src="assets/videos/CATIA/4-cyl-engine.mp4" type="video/mp4">
            </video>
            <p>4 Cylinder Engine Assembly</p>
        </div>

    </div>
</div>

    `
},

    ansys: {

    title:
        "Structural Analysis using ANSYS",

    description:
        "Finite element analysis studies focused on understanding structural response under applied loading.",

    details: `

        <h2>
            Structural Analysis using ANSYS
        </h2>


        <p class="project-intro">
            A collection of structural analysis studies
            performed using the finite element analysis
            workflow.
        </p>


        <h3>
            Analysis Workflow
        </h3>

        <div class="project-workflow">

            <div class="workflow-item">
                <span>1.</span>
                <strong>Geometry</strong>
                <small>
                    Model preparation
                </small>
            </div>


            <div class="workflow-item">
                <span>2.</span>
                <strong>Material</strong>
                <small>
                    Material assignment
                </small>
            </div>


            <div class="workflow-item">
                <span>3.</span>
                <strong>Boundary Conditions</strong>
                <small>
                    Supports and constraints
                </small>
            </div>


            <div class="workflow-item">
                <span>4.</span>
                <strong>Loading & Mesh</strong>
                <small>
                    Applied loading and mesh generation
                </small>
            </div>


            <div class="workflow-item">
                <span>5.</span>
                <strong>Post-processing</strong>
                <small>
                    Results and structural response
                </small>
            </div>

        </div>


        <h3>
            Parameters Evaluated
        </h3>

        <p>
            Structural deformation, equivalent stress,
            strain and overall structural response under
            applied loading conditions.
        </p>


        <h3>
            Software
        </h3>

        <p>
            ANSYS Mechanical.
        </p>


        <div class="project-tech">

            <span>ANSYS</span>
            <span>FEA</span>
            <span>Structural Analysis</span>
            <span>Simulation</span>

        </div>

                <h3>Stress under different conditions</h3>

<div class="simulation-slider">
    <div class="simulation-track">

        <div class="simulation-slide">
            <video autoplay muted loop playsinline>
                <source src="assets/videos/ANSYS/connecting-rod.mp4" type="video/mp4">
            </video>

            <p>Connecting Rod </p>
        </div>

        <div class="simulation-slide">
            <video autoplay muted loop playsinline>
                <source src="assets/videos/ANSYS/Spur-Gear.mp4" type="video/mp4">
            </video>
            <p>Spur Gear</p>
        </div>

        <div class="simulation-slide">
            <video autoplay muted loop playsinline>
                <source src="assets/videos/ANSYS/Leaf-Spring.mp4" type="video/mp4">
            </video>
            <p>Leaf Spring</p>
        </div>

        <div class="simulation-slide">
            <video autoplay muted loop playsinline>
                <source src="assets/videos/ANSYS/Coil-Spring.mp4" type="video/mp4">
            </video>
            <p>Coil Spring</p>
        </div>

        <div class="simulation-slide">
            <video autoplay muted loop playsinline>
                <source src="assets/videos/ANSYS/cylinder-under-pressure.mp4" type="video/mp4">
            </video>
            <p>Cylinder Under Pressure</p>
        </div>

        <div class="simulation-slide">
            <video autoplay muted loop playsinline>
                <source src="assets/videos/ANSYS/Shaft-Under-Torsion.mp4" type="video/mp4">
            </video>
            <p>Shaft Under Torsion</p>
        </div>

    </div>
</div>

        `
    },
};

/* =====================================================
   OPEN PROJECT
===================================================== */

function openProject(projectName) {

    const project = projects[projectName];

    if (!project) return;

    const modal =
        document.getElementById("projectModal");

    const modalContent =
        document.getElementById("modalContent");

    modalContent.innerHTML =
        project.details;


    /* SEAMLESS SIMULATION SLIDER */

    const simulationTrack =
        modalContent.querySelector(".simulation-track");

    if (simulationTrack) {

        const slides =
            Array.from(
                simulationTrack.children
            );

        slides.forEach(slide => {

            const clone =
                slide.cloneNode(true);

            simulationTrack.appendChild(clone);

        });

    }


    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =====================================================
   CLOSE PROJECT
===================================================== */

function closeProject() {

    const modal =
        document.getElementById("projectModal");

    modal.classList.remove("active");

    document.body.style.overflow = "";

}



/* =====================================================
   CLOSE MODAL ON BACKGROUND CLICK
===================================================== */

document
    .getElementById("projectModal")
    .addEventListener("click", event => {

        if (event.target.id === "projectModal") {

            closeProject();

        }

    });



/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeProject();

    }

});

/* =========================================================
   PROJECT FILTER + FLIP ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        Array.from(
            document.querySelectorAll(
                ".projects-page-grid .project-card"
            )
        );


    if (!filterButtons.length || !projectCards.length) {
        return;
    }


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter =
                this.getAttribute("data-filter");


            /* Don't run same filter */

            if (this.classList.contains("active")) {
                return;
            }


            /* -----------------------------------------
               SAVE OLD POSITIONS
            ----------------------------------------- */

            const firstPositions =
                new Map();

            projectCards.forEach(function (card) {

                if (card.style.display !== "none") {

                    firstPositions.set(
                        card,
                        card.getBoundingClientRect()
                    );

                }

            });


            /* -----------------------------------------
               ACTIVE BUTTON
            ----------------------------------------- */

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");


            /* -----------------------------------------
               FADE OUT REMOVED CARDS
            ----------------------------------------- */

            projectCards.forEach(function (card) {

                const categories =
                    card.getAttribute(
                        "data-category"
                    ) || "";


                const shouldShow =
                    filter === "all" ||
                    categories.includes(filter);


                if (!shouldShow &&
                    card.style.display !== "none") {

                    card.classList.add(
                        "project-filter-out"
                    );

                }

            });


            /* -----------------------------------------
               WAIT FOR EXIT ANIMATION
            ----------------------------------------- */

            setTimeout(function () {


                /* Hide / show cards */

                projectCards.forEach(function (card) {

                    const categories =
                        card.getAttribute(
                            "data-category"
                        ) || "";


                    const shouldShow =
                        filter === "all" ||
                        categories.includes(filter);


                    if (shouldShow) {

                        card.style.display = "";

                    } else {

                        card.style.display = "none";

                    }

                });


                /* -----------------------------------------
                   GET NEW POSITIONS + FLIP
                ----------------------------------------- */

                projectCards.forEach(function (card) {

                    if (card.style.display === "none") {
                        return;
                    }


                    const last =
                        card.getBoundingClientRect();


                    const first =
                        firstPositions.get(card);


                    /* Existing card → move smoothly */

                    if (first) {

                        const deltaX =
                            first.left - last.left;

                        const deltaY =
                            first.top - last.top;


                        if (
                            deltaX !== 0 ||
                            deltaY !== 0
                        ) {

                            card.style.transform =
                                `translate(${deltaX}px, ${deltaY}px)`;

                            card.style.transition =
                                "none";


                            requestAnimationFrame(
                                function () {

                                    requestAnimationFrame(
                                        function () {

                                            card.style.transition =
                                                "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease";

                                            card.style.transform =
                                                "";

                                        }
                                    );

                                }
                            );

                        }


                    } else {

                        /* New card entering */

                        card.classList.add(
                            "project-filter-in"
                        );


                        setTimeout(function () {

                            card.classList.remove(
                                "project-filter-in"
                            );

                        }, 20);

                    }


                    /* Clean exit state */

                    card.classList.remove(
                        "project-filter-out"
                    );

                });


            }, 250);

        });

    });

});

/* =====================================================
   PROJECT CARD CLICK
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const projectCards =
        document.querySelectorAll(".project-card[data-project]");

    projectCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const projectName =
                this.getAttribute("data-project");

            openProject(projectName);

        });

    });

});