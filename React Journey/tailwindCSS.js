
/* Day 31 of 100 Days of Code 
        TAILWIND CSS: https://tailwindcss.com/docs/utility-first

        1. Utility-First Fundamentals
           - traditional styling approach requires the use of custom CSS for custom designs
           With tailwind, utility classes are used to build custom designs without writing CSS
           eg: flexbox, padding, max-width, margin, width, space-between, ...

           - no inventing class names
           - reusable code to stlye that you don't have to write new CSS
           - state variants to target states like hover of focus.
           
           a. Maintainability Concerns
                   i. managing commonly repeated utility combinations.
                       - solved by extracting components and partials, using editor and language features like mulit-cursor editing and simple loops.
        
        2. Handling Hover, Focus, and Other States
           using utilities to styles elements on hover, and other states
           eg: <button class="bg-sky-500 hover:bg-sky-700 ...">
                   Save Changes
                </button>

           Tailwind also includes modifiers;
              a. Pseudo-classes, like ':hover'. ':focus', ':first-child', and ':required'
                   - pseudo-class reference:
                        Form states: 'required', 'invalid' and 'disabled'
                        Styling based on parent state(group-{modifier}) -mark the parent with the group class ie
                        'group-focus', 'group-active'

                        Differentiating nested groups
                        styling a specific parent group by giving that parent a unique group name: group/{name} class
                        , and including that name in modifiers using classes like group-hover/{name}
                        
                        Arbitary groups

                        Styling based on sibling state (peer-{modifier})
                        Differentiating peers
                        Arbitary peers

                        Styling direct children (*-{modifier})
                        Styling based on descendants (has-{modifier})
                        Styling based on the descendants of a group (group-has-{modifier})
                        Styling based on the descendants of a peer (peer-has-{modifier})

              b. Pseudo-elements, like '::before', '::after', '::placeholder', and '::selection'
                   - placeholder text, file input buttons, list markers, highlighted text, dailog backdrops, first-line and first-letter.

              c. Media and feature queries like responsive breakpoints(md and md), dark mode and 'prefers-reduced-motion'
                   - Viewport orientation( portrait and lndscape), print 

              d. Attribute selectors, like '[dir="rtl"]' and '[open]'
                   - ARIA States: use aria-* modifier to conditionally style things based on ARIA attributes
  
*/

/* 
   Day 32 of 100 Days of Code
       1. Responsive Design
         => Utilize breakpoints;
               a. sm - 640px (minimum width: @media (min-width: 640px) { ... })
               b. md - 768px
               c. lg - 1024px
               d. xl - 1280px
               e. 2xl - 1536px
            Eg: <img class="w-16 md:w-32 lg:w-48" src="...">

         => Working mobile-first
                   Tailwind uses a mobile-first breakpoint system. Just like bootstrap.
                   That is unprefixed utilities like 'uppercase' take effect on all screen sizes, while prefixed like 'md:uppercase' only take effect at the specified breakpoint and above.
         
         => Targeting mobile screens
             Use unprefixe utilities to target mobile, and override them at larger breakpoints. 
              Syntax; <div class="text-center sm:text-left"></div> // Centers text on mibile, and left align it on screens 640px and wider.
             Avoid using sm as it will  center text on screens 640px and wider.
         
         => Targeting a breakpoint range
              Syntax; class="md:max-xl:flex"

         => Customizing theme in the tailwind.config.js
         
         => Arbitary values
            use min or max modifiers to generate a custom breakpoint by using any arbitary value.
            Syntax: min-[320px]:text-center max-[600px]:bg-sky-300

        2. Dark Mode
            With the dark variant, Tailwind lets you style a site differently when dark mode is enabled. Relies on the operating preference.
            For toggling dark mode manually use class strategy

        3. Reusing Styles - Managing duplication and creating reusable abstractions.
               Techniques;
               a. Using editor and language features
               b. Mulit-cursor editing- select & edit class list for each element at once
               c. Loops <div class="mt-3 flex -space-x-2 overflow-hidden">
                                {#each contributors as user}
                                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="{user.avatarUrl}" alt="{user.handle}"/>
                                {/each}
                        </div>
                d. Extracting components and partials
                   If you need to reuse some styles across multiple files, the best strategy is to create a component and extract it with @apply

        4. Adding Custom Styles
           a. customizing your theme to  change color pallettes, spacing style, typography scale
           b. Using arbitary values: propeties, variants
           c. using CSS and @layer
              

        4. Functions & Direcives
            => Directives are custom Tailwind-specific at-rules. i.e statements that instruct CSS how to behave.
            These include;
                   a. @tailwind: inserts Tailwind's base, components, utilities and variants styles into your CSS
                   b. @layer: directive instructing tailwind how to group your own styles ie creating different sections in your CSS for different types of styles.
                   c. @apply: facilitates the use of your own custom CSS.

            => Functions 
                   theme() - access Tailwinds.config.js
                   screen() - creates meadia queries that refernces breakpoints by name. eg; @media screen(sm) {}
                   - use dot to access nested color values eg; theme(colors.blue.500)

        5.  Layout
y             i. Container class: set max width of an element to match the min-width of the current breakpoint.
                -A component for fixind an element's width to the current breakpoint.
                   a. container mx-auto - to center container, adjusts margin automatically
                   b. container px-{size} - adds horizontal padding.

            ii. Box Sizing
                   utilities for how the browser should calculate an element's total size.
                         box-border (includes content, paddding and borders) 
                         box-content- excludes borders and padding.
          
           iii. Display(display) class
                        defines how compnents are going to be placed on the web page.
                        a. block: block element, own line, and fills its parent.
                        b. inline-block: prevent text inside from extending beyod parent
                        c. inline: ignores height and width set by user
                        d. flex: block level flex container margin doesnot collapse with content margins
                        e. inline-flex
                        f. table
                        g. grid
                        h. content: disappear the container
                        i. hidden: remove the element, sets element display to none

            iv. Float Class
                        utilities for controlling the wrapping of content around an element.
                        a. float-right
                        b. float-left
                        c. float-none: floats elements at default place

             v. Clear
                   utilities for controlling the wrapping of content around an element.
                   Eg; left, right, both, none. controlwrapping of content around an element

             vi. Setting the aspect ratio of an element
                   aspect-{ratio} 
                   Syntax: <iframe class="w-full aspect-video md:aspect-square" src=""></iframe>
                   can apply aspect ratio conditionally on hover, focus, and others states, breakpoints, custom themes, arbitary values.

             vii. Columns 
                   utilities for controlling number of columns within an element
                   a. columns-{count}: sets number of columns that should be created within an element. w-full
                   b. columns-{width}: sets ideal column width for the content within an element, number of columns(the count) automatically adjusts
                   c. gap-x sets width between columns

             viii. Break After
                    controls how a column or page should break after an element
                    break-after-{value}
                    break-before-{value} opposite of break after.
                    break-inside-{value} specifies how a column should behave within an element.

               ix. Box Declaration break how element fragments should be rendered across multiple lines, columns or pages.
                     box-decoration-slice: renders as distinct blocks
                     boc-decoration-clone: renders as one continuous fragment.

                x. Isolation
                      utilities for controlling whether an element should explictly create a new stacking context.
                      isolate and isolation-auto
                      Syntax; <div class='isolate md:isolation-auto'>
                                <!-- ... -->
                              </div>

                xi. Object Fit
                        controlling how a replaced element's content should be resized.
                        contain, cover, fill, scale-down, object-none
                        Syntax; <div class='bg-indigo-300 ... '>
                                        <img class='object-cover h-48 w-95 ...'>
                                </div>
*/

/* 
   Day 33 of 100 Days of Code
        1. Layout utilities cont.
               xii. Object Position
                        - controls how a replaced element's content should be positioned within its container.
                        Syntax; object-{side} , top, bottom right, left, center
           
              xiii. Overflow
                        - utitilities for controlling how an element handles content that is too large for the container
                        Syntax: overflow-visible  - prevents content within an element from being clipped.
                                overflow-hidden - clip contents the overflows the bounds of that element.
                                overflow-auto - adds scrolling in the event of overflow. Unlike overflow-scroll always shows scrollbars.
                                overflow-x-auto - horizontal scrolling.
                                overflow-y-auto - vertical scrolling.

              xiv. Overscroll Behavior
                         - utilities for controlling how the browser behave when reaching the boundary of a scrolling area.
                         Syntax; overscroll-contain - prevents scrolling in the target area from triggering scrolling in the parent element. preserves bounce effects
                                 overscroll-none -prevents scrolling in the target area from triggering scrolling in the parent, also prevents bounce effect
                                 overscroll-auto - enable scrolling a parent scroll area when the boundary of the primary scroll area is reached.
                     
               xv. Position
                        - utilities for controlling how an element is positioned in th DOM.
                        Syntax; static - normal flow of the document, will not act as position reference.
                                relative - normal flow of the document, offsets calculated realtive to the element's normal position. act as a position reference for absolutely positioned children.
                                absolute - outside the normal flow of the document, offsets calculated to the neares parent with any position other than static
                                fixed - position element relative to the browser window. Offset calculated relative to the viewport, element will act as position reference for absolutely positioned children.
                                sticky positioning elements- position an element as relative until it crosses a specified threshold, then treat it as fixed until its parent is off screen.
                                
               xvi. Top/Right/Bottom/Left
                        - utilities for controlling the placement of poitioned elements.
                        Syntax; <div class="absolute inset-x-0 bottom-0 h16 ...">08</div>
                                <div class="relative h-32 w-32 ...">
                                  <div class="absolute h-14 w-14 -left-4 -top-4 ..."></div> // Using negative values.
                                </div> 
                  
              xvii. Visibility
                        - utilities for controlling the visibility of an element
                        Syntax; invisible - hides an element, but still maintain its place in the DOM unlike hidden from the display.
                                collapse - hide table rows, row groups, columns and column groups. as if their display is st to none.
                                         - enables dynamic toggling of rows and columns without afecting the table layout.
                                visible - undo invisible

             xviii. Z-Index 
                        - utilities for controling the stack order of an element.
                        Syntax; <div class="z-40 ...">5</div>
                                <div class="z-30 ...">4</div>

        2. Flexbox & Grid 
                a. Flex basis
                   utilities for controlling the intial size of flex items.
                   Syntax; basis-{size}
                
                b. Flex Direction
                   utilities for controlling the direction of flex items.
                   syntax; flex-row - position flex items horizontally in the same direction as text.
                           flex-row-reversed - position flex items horizontally in the opposite direction
                           flex-col - position flex items vertically
                           flex-col-reverse - position flex items vaertically in the opposite direction

                c. Flex Wrap 
                    utilities controlling how flex items wrap.
                    Syntax; flex-nowrap - prevent flex items from wrapping, causing inflexible items to verflow the container if necessary.
                            flex-wrap - allow items to wrap
                            flex-wrap-reverse - wrap flex items in the reverse direction

                d. Flex
                     utilities for controlling how flex items both grow and shrink
                     Syntax: flex-initial - allow a flex item to shrink but not grow, taking into account its initial size
                             flex-1 - allow a flex item to grow and shrink as neede,ignoring its initial size.
                             flex-auto - allows a flex to grow and shrink, taking into account its initial size.
                             flex-none - prevent flex item from growing or shrinking.

                e. Flex Grow
                    utilities for controlling how flex items grow
                    Syntax; grow - flex item grows to fill any available space
                            grow-0 - prevent a flex item from growing 

                f. Flex Shrink 
                    utilities for controlling how flex items shrink
                    Syntax; shrink - allow a flex item to shrink if needed
                            shrink-0 - prevent a flex item from shrinking

                g. Order
                    Utilites for controlling the order of flex and grid items
                        Syntax: order-{order} ie order-last,
                                -order-1  // Uses negative values

                h Gaps 
                   utilities for controlling gutters between grid and flexbox items
                   Syntax; gap-{size} - change gap between both rows and columns in grid and flexbox layouts
                           gap-x-{size} and gap-y-{size} - change gap between columns and rows independently.
                   
                i. Justify Content 
                   utilities for controlling how flex and grid items are positioned along a container's main axis.
                   Syntax; justify-start - aligns items against the start of the container's main axis
                           justify-center - justify items along the center of the container's main axis
                           justify-end - against end on container's main axis
                           justify-between - equal space btn each item.
                           justify-around - equal space on each side of each item.
                           justify-evenly 
                           justify-stretch - content items to fill all the available space along the container's main axis
                           justify-normal - pack content in their default position as if no justify-content

                j. Justify items
                     controlling  how grid items are aligned along ther inline axis
                        ie. start, center, stretch

                k. Justify self
                      controlling how an individual grid item is aligned along its inlin axis

                l. Align content
                    utilities controlling how rows are positioned in multi-row flex and grid containers.
                    Syntax; content-start, content-center, content-end

                m. Align self
                     utitilities controlling how an individual flex or grid item is positioned along its container's cross axis
                     Syntax; self-auto - based on container's align items property
                             self-start - aligns to start despite containers items value
                             self-center - center of the container;s cross axis, despite items value
                             slef-end
                             slef-stretch

                n. Place Content 
                    utitilities for controlling how content is justified and aligneed at the same time
                    Syntax; place-content-center - pack items in the center of the block axis.
                            same props as justify

                o. Place items
                   Utilities for controlling how items are justified and aligned at the same time
                   Syntax; place-item-center ...start, end, baseline, stretch

                p. Place Self 
                   control how individual item is justified and aligned at the same time
                   Syntax; place-self-auto ...start, end, center, stretch.

        3. Spacing
                a. Padding 
                   controlling an element's padding.
                   Syntax; p{t|r|b|l}-{size} i.e pt-6, pb-2, pl-2 // padding to a single side.
                           px-{size} // add horizontal padding.
                           py-{size}
                           p-{size} // all sides
                           ps-* // padding-inline-start
                           ps-* // padding-inline-end
                
                b. Margin 
                   controls element's margin
                   Syntax; ms-8, me-2, mt-5 ....

                c. Space Between
                   utilities for controlling the space between child elements
                   Syntax; space-x-{amount}
                           space-y-{amount} // vertical space btn children
                           space-x-reverse to add space to elements with class flex-row-reverse
                           space-y-reverse 
                           ie. <div class="flex flex-row-reverse space-x-4 space-x-reverse ...">
                                        <div>01</div>
                                        <div>02</div>
                                        <div>03</div>
                                </div>
                
*/

/* 
    Day 34 of 100 Days of Code
       1.Sizing
                a. Width
                   - sets the width of an element
                   Syntax; width-{number} // fixed width.
                        w-{fraction} || w-full // percentage based width
                        w-screen // viewport width
                        w-auto // resets width under s condition, like at a particular breakpoint
                        ie <div class="w-full md:w-auto">
                                <!-- ... -->
                        </div>

                b. Min-Width
                    - setting minimum width of an element
                    Syntax; min-w-* 

                c. Max-Width 
                    - setting the maximum width of an element
                    Syntax; max-w-* 
                            max-w-md  // Sizing large elements above 24rem
                            max-w-prose // Max-width optimised for readability and adapts based on the font size.
                     
                d. height 
                    Syntax; height-{number} // Fixed height
                            h-full // height to 100% of its parent
                            h-screen // span element's height the entire height of the viewport
                            h-dvh // dynamic viewport height. changes as browser UI expands or contracts.
                            h-lvh  // largest possible height of the viewport. same as 100vh
                            h-svh // smallest possbile height

                e. Min height & Max height
                   Syntax; min-h-* 
                           max-h-*

                f. Size
                   setting width and height of an element at the same time
                   Syntax; size-{number} // Fixed size
                           size-full 
                           size-auto // Resets size of an element

        2. Typograghy
                a. Font Family
                   controlling font family of an element
                   eg font-sans
                        font-serif
                        font-mono

                b. font size
                   syntax; text-{size} :- sm, base, lg, xl, 2xl
                           text-{size}/{line-height} - text-xl/8 
        
                c. font smoothing
                   syntax;  subpixel-antialiased - render text using subpixel antialiasing
                            antialised  uses grayscale

                d.font style
                  utilites for controlling the style of text.
                  Syntax; italic
                          not-italic

                e. font weight 
                   utilities for controlling the font weight of an element
                   syntax; font-{weight} 100,...,400,500,600,700,800: thin, extralight, light, normal...bold, extrabold

                f. Font variant numeric
                   Syntax: font-variant-numeric // adds glyphs for numbers, fractions, and other ordinal markers
                           ordinal // glyphs for ordinal markers
                           slashed-zero
                           lining-nums // aligns with baseline
                           oldstyle-num
                           proportional-nums // numeric glyphs with non-uniform
                           tabular-nums // numeric glyphs with uniform widths
                           diagonal-fractions  1/2
                           stacked-fractions // 
                           normal-nums // resets numeric fonts

                g. letter spacing
                   syntax; tracking-{size} - tight,normal,wide. Negative Values apply.

                h. line clamp
                   clamps text to a specific number of lines.
                   syntax; line-clamp-* // truncates a block of text after a number of lines.
                           line-clamp-none  // undoing clamping

                i. line height
                   syntax; leading-{none|tight|normal|relaxed|loose|snug} // relative line height based on font-size
                           leading-{size} // fixed

                j. List style image
                   utilities for controlling marker images for list items.
                   syntax; list-image-{value}
                   i.e  list-image-[url(checkmark.png)]

                k. List style position
                   utilities for controlling position of bullets/numbers in lists
                   syntax; list-inside  // indented
                           list-outside // not indented

                l. List style type
                   controlling the bullet/number styles of a list.
                   syntax; list-disc // dotted
                           list-decimal  // numbered numerically
                           list-none 

                m. text align
                   syntax; text-{left|right|center|justify}

                 <=> text-color
                   syntax; text-{color}/{opacity}. text-sky-400/25

                 <=> text decoration
                   syntax; underline
                           overline
                           no-underline
                           line-through

                 <=> text decoration color
                   syntax; decoration-{color}

                 <=> text decoration style
                   syntax; decoration-{solid|double|dotted|dashed|wavy}
                
                 <=> text-decoration thickness
                   syntax; decoration-{width} ie decoration-2

                 <=> text underline offset
                   controls space between text and underline
                   syntax; underline-offset-{width} ie underline-ffset-8
                 
                 <=> text transform
                   -controls transformation of text
                   syntax; uppercase,lowercase, normal-case,capitalize.

                 <=> text overflow
                   syntax; truncate // prevents wrapping by truncating overflowing text with ...
                           text-ellipsis // truncates overflowing text truncates with ...
                           text-clip truncate at the limit of content area.
                
                 <=> text wrap
                   syntax: text-wrap
                           text-nowrap
                           text-balance // distribute text evenly across each line
                           text-pretty // prevents orphans(a single word on its own line as the end of a text block)
                
                  <=> text indent
                        syntax; text-{width} 

                n. Vertical align
                   controlling the vertical alignment of an inline or table-cell box.
                   syntax; align-baseline // baseline of its parent
                           align-{top|bottom|middle} // aligns an element and its descendants too.
                           align-text-top // align the top of an element with the top of the parent elements font
                           align-text-bottom // aligns bottom of an element with the bottom of parent element's font
                
                o. whitespace
                   controls an element's white-space property
                   syntax; whitespace-normal 
                           whitespace-nowrap  // spaces and newlines will be collapsed
                           whitespace-pre // text will bot be wrapped
                           whitespace-pre-line // preserves newlines only. text will be wrapped.
                           whitespace-pre-wrap  // preserve newlines and spaces within an element
                           whitespace-break-spaces 

                p. Word break
                   syntax; break-normal
                           break-words  // add line breaks mid-word if needed
                           break-all // add line breaks whenever necessary, no preserving whole words
                           break-keep // prevent line breaks from being applied to chinese/japanese/korean
                  
                q. hyphens
                   controlling how words should be hyphenated
                   syntax; hyphens-none // even when '&shy;' is used
                           hyphens-manual // only where line break suggestion '&shy;' is used
                           hyphens-auto 

                r. Content
                   controlling content before and after pseudo-elements
                   syntax; content-{value} along with ::before and ::after

*/


/*
    Day 35 of 100 Days of Code
                           
        1. Background
                   a. background attachment
                        controls how a background image behaves when scrolling.
                        syntax; bg-fixed // fix the background image relative to the viewport
                                bg-local // scroll bg imgae with the container and viewport
                                bg-scroll // with viewport but not container
                    
                    b. background clip
                        -controls bounding box of an element's background.
                        syntax; bg-clip-{border|padding|content} // control the bounding box of an elements background
                                bg-clip-text // cropos bg to match shape of text. Usefull when we need background image to be visible through the text.

                    c. background color
                        -controls elements background color
                        syntax; bg-{color}
                                bg-{color}/{75|50} // changes opacity

                    d. background origin
                        -how an element's background is positioned relative to border, padding, and content
                        syntax; bg-origin-{origin|padding|content}

                    e. background position
                        syntax; bg-{side} - right,top,bottom,left

                    f. background repeat
                        syntax; bg-repeat // vertically & horizontally
                                bg-no-repeat 
                                bg-repeat-x //repeat horizontally
                                bg-repeat-y // repeat vertically
                    
                    g. background size
                        syntax; bg-auto  // default image size
                                bg-cover // scale to fill background layer
                                bg-contain // scale without stretching

                    h. background image
                        syntax; bg-gradient-{direction} ie bg-gradient-to-r

                    i. Gradient Color stops
                        syntax; from-{color} ie bg-gradient-to-r from-indigo-500  // starting color
                                to-{color} ie bg-gradient-to-r from-cyan-500 to-blue-500 // ending color
                                via-{color} ie bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 // middle color
                                from-{position}, via-{position} & to-{position} // specifying stop positions.
                                to-transparent . bg-gradient-to-r from-blue-500

        2. Border
                    a. border radius
                        syntax; rounded-{''|sm|md|lg|full} // rounded corners
                                rounded-full // pill buttons
                                rounded-none // remove existing border radius
                                rounded-{t|r|b|l}-{sm|lg|full} // rounding side separately.
                         
                    b. border width
                        syntax; border-{width} 
                                border-{side}-{width} is border-b-4 // individual sides
                                border-{x|y}-{width} // sets border on 2 sides of an element at the same time
                                divide-{x|y}-{width} & divide-{color} to add border betwween elements

                        if preflight is disabled consider specifying a border style utility

                    c. border color
                        border-{color} 
                        border-{side}-{color}

                    d. border style
                        border-{style} solid,dashed,dotted,double
                        border-none no style
                    
                    e. divide width
                        control border width btn elements
                        syntax; divide-x-{width} // horizontal children
                                divide-y-{width} //stacked children
                                divide-x-reverse, divide-y-reverse to be used when flex-row-reverse or flex-col-reverse is used.

                    f. divide color
                        divide-{color}

                    g. divide style
                        divide-{style} dashed,dotted,double

                    h. outline width
                        outling-{width} ie outline-3
                    
                    i. outline color
                        outline-{color}/{opacity}

                    j. outline style
                        outline-{style} dashed,dotted,double
                        ouline-none removes outlines

                    k. outline offset 
                        outline-{offset} ie outline-offset-2
                    
                    l. ring width
                        ring-{width} // adds rings
                        focus:ring-{width} // focus rings
                        ring-inset // renders a ring on the inside of an element instead of outside
                       
                    m. ring color
                        ring-{color}
                    
                    n. ring offset width
                        ring-offset-{width}
                        ring-offset-{color} // changes offset color
        
        3. Effects
                    a. Box shadow
                        controls shodow of an element
                        syntax; shadow-{''|sm|md|lg|xl|2xl} // adds outer shadow
                                shadow-inner // add an inner shadow
                                shadow-none  // removes an existing box shadow

                    b. box shadow color
                        shadow-{color} 
                        use colored shadows on colored backgrounds to look more natural

                    c. opacity
                        opacity-{amount}
                    
                    d. mix blend mode
                        controlling how an element should blend with the background
                        syntax; mix-blend-{mode} ie muliply
                    
                    e. background blend mode
                        how an element's bg image should blend with its backgroun color
                        syntax; bg-blend-{mode}
            
        4. Filters
                    a. blur
                        blur-{none|sm|lg|2xl}
                        filter-none // removes all filters

                    b. brightness
                        brightness-{amount} 50,100,125..
                        filter-none - removes all filters

                    c. contrast
                        contrast-{amount}

                    d. drop shadow
                        drop-shadow-{md|lg|xl|2xl}

                    e. grayscale
                        grayscale-0 // rendered in full color
                        grayscale // rendered as grayscale

                    f. hue rotate
                        hue-rotate-{amount} ie -hue-rotate-60

                    g. invert 
                        invert-0 // normal
                        invert // inverted colors

                    h. Saturate
                        saturate-{amount} 50,100,150

                    i. Sepia
                        sepia-0 // full color
                        sepia // render as sepia

                    j. backdrop blur
                        backdrop-blur-{sm|md|xl}

                    k. backdrop brightness
                        backdrop-brightness-{amount} 50, 125, 200
                        backdrop-contrast-{amount}
                        backdrop-grayscale and backdrop-grayscale-0
                        backdrop-hue-rotate-{amount}
                        backdrop-invert and backdrop-invert-0
                        saturate, opacity, sepia
        
        5. Tables
                    a. border collapse
                        controls whether table border should collapse or be separated
                        syntax; border-collapse // works only at table tag. cell border combine into a single border
                                border-separate // own separate borders
                          
                    b. border spacing
                        controls space btn table borders
                        syntax; border-spaceing-* 
                        
                    c. table layout
                        control table layout algorithm
                        syntax; table-auto // automatically sizes columns to fit contents of the cell
                                table-fixed  // uses fixed width for columns. first width row will fix for the whole table

                    d. caption side
                        alignment of a caption element inside of a table
                        syntax; caption-top // top of table
                                caption-bottom  // top of table

        6. Transition & Animation
                    a. transition property
                        controlling which CSS properties transition
                        syntax; transition-{properties}
                                motion-safe & motion-reduce // prefer reduced motion

                    b. transition duration
                        control duration of CSS transtions.
                        duration-{amount} ie duration-300

                    c. transition timing function
                        controlling easing of CSS transitions
                        syntax; ease-{timing} 

                    d. transition delay
                        delay-{amount} 150,300,700

                    e. animation
                        syntax; animate-spin // adds linear spin animation ie loading indicators
                                animate-ping  // ping ie notification badges
                                animate-pulse // gently fade in and out ie skeleton loaders
                                animate-bounce // element bounce up and down -- scroll down indicators

        6. Transforms 
                    a. Scale 
                        scalling elements with transform.
                        syntax; scale-{percentage}, scale-x-{percentage} & scale-y-{percentage}
                            transform-none // remove all transforms
                            transform-gpu // forces GPU instrad of CPU to render the transition hardware acceleration

                    b. Rotate
                        rotating element with transform
                        syntax; rotate-{angle} 0,45,90,180

                    c. translate
                        shifts an element along horizontal and vertical axes
                        translate-x-{amount} and translate-y-{amount}

                    d. skew
                        skew-x-{amount} and skew-y-{amount}

                    e. transform origin
                        specify origin for element's transformations
                        syntax; origin-{center|top-left|bottom}
                        
        7. Interactivity
                    a. accent color
                        controlling the accented color of a form control
                        syntax; accent-{color} 

                    b. appearance
                        suppressing native form control styling
                        syntax; appearance-none // removes default element appearance.when creating custom form components
                                appearance-auto // restore default browser specific styling

                    c. cursor
                        syntax; cursor-{pointer|progess|not-allowed} // which cursor is displayed when hovering.

                    d. caret color 
                        controls color of the text input cursor.
                        syntax; caret-{color} // changes color of the text input cursor
                    
                    e. pointer events
                        controls whether an element responds to pointer events.
                        syntax; pointer-events-auto // default browser behavior
                                pointer-events-none

                    f. resize
                        how an element can be resized
                        syntax; resize // make an element horizontally and vertically resizable
                                resize-y // vertically
                                resize-x 
                                resize-none

                    g. scroll behavior
                        control scroll behavior
                        syntax; scroll-smooth

 */

 /* 
    Day 36 of 100 Days of Code
                    h. scroll margin
                        controls scroll effect around items in a snap container.
                        when stop scrolling, the scrolling quickly adjust and stop at a specified distance btn snap position and the container
                        syntax; scroll-m{l|r}-{size} ie scroll-ml-6  // sets scroll margin
                    
                    i. scroll padding
                        contols an element's scroll scroll offset within a snap container
                        syntax; scroll-p{side}-{size} // sets scroll offset of an element within a snap container. 

                    j. scroll snap align
                        snap-center 
                        snap-start
                        snap-end
                    
                    k. scroll snap stop
                        controls whether you can skip past possible snap positions
                        syntax; snap-always & snap-mandatory // force snap position stops
                                snap-normal // skipping snap position stops

                    l. scroll snap type
                        snap-x  // horizontal scroll snapping within an element. must be used in conjunction with snap alignment in child elements
                        snap-mandatory
                        snap-proximity // rest on snap points close in proximity

                    m. touch action 
                        controlling how an element can be scrolled and zoomed on touchscreens
                        syntax; touch-{auto|none|pan-x|pan-y}

                    n. user select
                        controls whether a user can select text in an element
                        syntax; select-none
                                select-text
                                select-auto

                    0. will change
                        optimizing upcoming animations of elements that are expected to change.
                        syntax; will-change-scoll, will-change-contents & will-change-transform
                        after use to be removed by will-change-auto
                        avoid frequent use of will change utilities.

        1. SVG
                    a. fill
                        styling the fill of SVG elements
                        syntax; fill-{color} // change fill color
                            
                    b. stroke
                        stroke-{color}

                    c. stroke width
                        stroke-{width}

                    d. screen readers
                        sr-only 
                    
                    e. forced color adjust
                        forced-color-adjust-none // opitng out of forced colors
                        forced-color-adjust-auto // restore forced color

        2. Official Plugings
                    a. @tailwindcss/typography
                        installation - npm install -D @tailwindcss/typography
                        Add to tailwind.config.js 
                        Basic usage
                    b. forms

    KEY TAKEAWAY
    Tailwind CSS does not support dynamic class names out of the box because it generates its classes at buildtim, not runtime. 
    to change color based on a state variable  use inline styles instead


 */
