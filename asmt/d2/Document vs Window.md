## Document vs Window objects in JS


||Document | Window |
|---|---|---|
What is it?|The Document interface represents any web page loaded in the browser & serves as an entry point into the web page's content which is the DOM tree.|The Window interface represents a window containing a DOM document|
||Document thus refers to the content loaded in a browser tab. This interface describes the methods and properties common to various document types such as HTML, XML, SVG...etc. Given a specific document type, a larger API is available|Each tab of a tabbed browser is represented by its own 'Window' object. Moreover, a window may be embedded in a HTML element such as iFrame, Object...etc of a document present inside a existing Window. A Window object is the topmost object of the DOM hierarchy [^1]|
||It is the object of window property|It is the object of browser|
|BOM vs DOM|Document is part of BOM (Browser Object Model) & DOM (Document Object Model)|Window is part of BOM (Browser Object Model) but not DOM (Document Object Model)|
|Accessing one from other|The read-only 'document.defaultView' property returns the Window object associated with a document | The 'document' property of a Window object points to the DOM Document loaded in that window. Also of interest is the global variable (for a browser environment in general, the global context is the window object itself [^2]) called 'window'[^3] which is exposed in JS & always refers to the tab in which the script is running |
Inheritance hierarchy for the interfaces| EventTarget<--Node<--Document|EventTarget<--Window|
|Interesting properties|Document.activeElement , Document.adoptedStyleSheets , Document.head , Document.body , Document.scripts , Document.styleSheets , Document.pictureInPictureElement , Document.scrollingElement , Document.plugins , Document.images , Document.links , Document.characterSet , Document.children , Document.compatMode , Document.contentType , Document.documentURI , |Window.closed , Window.document , Window.screen , Window.window , Window.frameElement , Window.frames , Window.parent , Window.history , Window.innerHeight , Window.innerWidth , Window.outerHeight , Window.outerWidth , Window.location , Window.opener|
|Interesting methods|Document.createAttribute() , Document.createElement() , Document.createEvent() , Document.exitFullscreen() , Document.exitPictureInPicture() , Document.getElementById() , Document.getElementsByClassName() , Document.getElementsByTagName() , Document.getElementsByTagNameNS() , Document.querySelector() , Document.querySelectorAll() , Document.getSelection() , Document.hasStorageAccess() , Document.hasFocus()|Window.reportError() , Window.addEventListener() , Window.removeEventListener() , Window.dispatchEvent() , Window.alert() , Window.confirm() , Window.prompt() , Window.print() , Window.stop() , Window.blur() , Window.setImmediate() , Window.clearImmediate() , Window.setInterval() , Window.clearInterval() , Window.setTimeout() , Window.clearTimeout() , Window.open() , Window.close() , Window.moveTo() , Window.resizeBy() , Window.scroll() , Window.scrollTo() , Window.getSelection()|
|Interesting events|scroll , wheel , visibilitychange , animationstart , animationend , copy , cut , paste , drag , drop , fullscreenchange , keydown , keyup , DOMContentLoaded , pointermove , selectionchange , touchmove , transitionrun|error , languagechange , deviceorientation , resize , storage , animationstart , animationend , copy , cut , paste , offline , online , focus , blur , pagehide , load , appinstalled , message , beforeprint , afterprint , unhandledrejection , rejectionhandled , transitionrun|
|Some common points apart from the events fired|It is a Host object (not a native object)[^4]|same here|



Summarizing the above, from this stack overflow answer [^5]:

_window is the main JavaScript object root, aka the global object in a browser, and it can also be treated as the root of the document object model. You can access it as window._

_window.screen or just screen is a small information object about physical screen dimensions._

_window.document or just document is the main object of the potentially visible (or better yet: rendered) document object model/DOM._

_Since window is the global object, you can reference any properties of it with just the property name - so you do not have to write down window. - it will be figured out by the runtime._


#### References:
* https://developer.mozilla.org/en-US/docs/Web/API/Document
* https://developer.mozilla.org/en-US/docs/Web/API/Window
* https://stackoverflow.com/questions/2934787/view-list-of-all-javascript-variables-in-google-chrome-console/2934807#2934807
* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model

##### Footnotes:
[^1]: https://www.geeksforgeeks.org/differences-between-document-and-window-objects/ , https://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript#9895261
[^2]: https://stackoverflow.com/questions/6349232/whats-the-difference-between-a-global-variable-and-a-window-variable-in-javas 
[^3]: https://developer.mozilla.org/en-US/docs/Web/API/Window/window
[^4]: https://www.geeksforgeeks.org/what-is-the-difference-between-host-objects-and-native-objects/?
[^5]: https://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript#9895261