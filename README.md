# sign-up-form
Sign up page built for The Odin Project

## Technology
This is build using HTML, CSS and JS. The JS handles validation that the html doesn't handle out of the box. For example, visual validation activates immediately and flags empty fields as invalid, so I used JS to add the `form-input-full` class to the element so that `form-input-full:valid` and `form-input-full:invalid` only activate on elements containing some kind of values. Additionally, there is no built-in password/confirm-password validation so I wrote a function in JS that handles this as well. 

## Credits
Splash page image by [Victoria Shes](https://unsplash.com/photos/UC0HZdUitWY)