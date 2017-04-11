## Choosing a design system for Vets.gov

1. Goals
    1. Where are we now?
        1. How much time are we spending catching inconsistencies?
        2. Mel’s Sketch library
        3. Is there a single source of truth from a codebase perspective, or are people copying and pasting?
    2. Where do we want to be?
        1. Atomic Design
        2. Stakeholders and their respective needs
    3. We need to pick a tool; I recommend Fractal
        1. Option: Fractal
        2. Option: Pattern Lab
2. What do both systems do well?
    1. Both run on node
    2. Both adhere to the concept of atomic design
    3. Both are, ultimately, static-site-generators
    4. Both allow for updating that propagates across the system
3. Where do they diverge? 
    1. Fractal
        1. doesn’t include ‘ish’
        2. doesn’t use atomic design vocabulary (though can likely be configured to do so?)
        3. exposes CSS, html, hbs, notes
        4. file system keeps related files in a single directory
        5. Has an existing API that exposes your design system’s components 
    2. Pattern Lab
        1. Includes 'ish'
        2. Institutional knowledge in the form of Robbie
        3. Does not expose css or notes by default
        4. No existing API — but has a stronger open source community than Fractal
        5. Allows for documentation of each component as well as annotation (I’m still not clear on the difference)
4. Open questions
    1. Of our stakeholder groups, should one or another take precedence? (i.e., is it going to be substantially harder for developers to work with one system over another, and should that take precedence over one system or another for content)
    2. We need to confirm that either of these systems is capable of being the core codebase _in practice_, because they both are in theory
    3. Do we have the institutional will to change workflows?
    4. How does this play with the long-game CMS?
5. Next steps
    1. Answer those open questions, especially from a dev perspective
    2. Recommend moving forward with Fractal unless dev can persuade otherwise
6. Documentation
    1. On Atomic Design
    2. Fractal documentation
    3. Pattern Lab documentation
    4. Rizzo system (other design systems as APIs)
