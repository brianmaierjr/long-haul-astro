---
title: Markdown Test Page
layout: ../../layouts/Post.astro
description: Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
date: 2022-12-3
---

## Paragraph Styles

Hello, this is a paragraph.

This is a new paragraph!

```markdown
Hello, this is a paragraph.

This is a new paragraph!
```

---

## Headings

# An H1 Header

## An H2 Header

### An H3 Header

#### An H4 Header

##### An H5 Header

###### An H6 Header

```markdown
# An H1 Header

## An H2 Header

### An H3 Header

#### An H4 Header

##### An H5 Header

###### An H6 Header
```

---

## Blockqoute

> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue
> – Mark Twain

```markdown
> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue
> – Mark Twain
```

---

## Lists

### Unordered List

-   Item 1
-   Item 2
-   Item 3

*   Item 1
*   Item 2
*   Item 3

-   Item 1
-   Item 2
-   Item 3

```markdown
-   Item 1
-   Item 2
-   Item 3

*   Item 1
*   Item 2
*   Item 3

-   Item 1
-   Item 2
-   Item 3
```

### Nested List

-   Item 1
    -   Sub-item 1
    -   Sub-item 2
-   Item 2
    -   Sub-item 1

```markdown
-   Item 1
-   Sub-item 1
-   Sub-item 2
-   Item 2
-   Sub-item 1
```

### Ordered List

1. Item 1
2. Item 2
3. Item 3
4. Item 1
5. Item 2

```markdown
1. Item 1
2. Item 2
3. Item 3
4. Item 1
5. Item 2
```

---

## Code Blocks

Check out this code:

    def fibonacci(number):
        if number <= 1:
            return number
        else:
            return fibonacci(number - 1) + fibonacci(number - 2)

And use the function like this:

    fib_number = fibonacci(8)
    print 'The 8th Fibonacci number is:', fib_number

Wow, that was amazing...

```markdown
Check out this code:

    def fibonacci(number):
        if number <= 1:
            return number
        else:
            return fibonacci(number - 1) + fibonacci(number - 2)

And use the function like this:

    fib_number = fibonacci(8)
    print 'The 8th Fibonacci number is:', fib_number

Wow, that was amazing...
```

---

## Preformatted Block

```html
<h1>This is preformatted</h1>
<ul>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
</ul>
```

## Horizontal Rule

---

```markdown
---
```

---

## Links

[Stack Abuse](http://stackabuse.com)

```markdown
[Stack Abuse](http://stackabuse.com)
```

### Automatic Linking

<http://stackabuse.com>

```markdown
<http://stackabuse.com>
```

## Emphasis

_This is emphasized text!_

**This is strong text!**

_This is emphasized text!_

**This is strong text!**

```markdown
_This is emphasized text!_

**This is strong text!**

_This is emphasized text!_

**This is strong text!**
```

---

## Inline Code

In JavaScript, use `console.log()` to print to the console.

```markdown
In JavaScript, use `console.log()` to print to the console.
```

---

## Images

Images will be in the smaller content container unless you use HTML and place them in a `figure` or `picture` container.

![My Alt Text][id]

[id]: /images/touring.webp "My Optional Title Text"

```markdown
![My Alt Text][id]

[id]: /images/touring.webp "My Optional Title Text"
```

<figure>
    <img src="/images/touring.webp" alt="My Optional Title Text" />
</figure>

```markdown
<figure>
    <img src="/images/touring.webp" alt="My Optional Title Text" />
</figure>
```

## Escaping

OMG \_this\_ had better not have emphasis...

```markdown
OMG \_this\_ had better not have emphasis...
```
