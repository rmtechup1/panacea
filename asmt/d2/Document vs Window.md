## Document vs Window objects in JS


||Document | Window |
|---|---|---|
What is it?|The Document interface represents any web page loaded in the browser & serves as an entry point into the web page's content which is the DOM tree.|The Window interface represents a window containing a DOM document|
||Document thus refers to the content loaded in a browser tab|Each tab of a tabbed browser is represented by its own 'Window' object. Moreover, a window may be embedded in a HTML element such as iFrame, Object...etc of a document present inside a existing Window|
|Accessing one from other|The read-only 'document.defaultView' property returns the Window object associated with a document | The 'document' property of a Window object points to the DOM Document loaded in that window. Also of interest is the global variable (for a browser environment in general, the global context is the window object itself [^1]) called 'window'[^2] which is exposed in JS & always refers to the tab in which the script is running |
||This interface describes the methods and properties common to various document types such as HTML, XML, SVG...etc. Given a specific document type, a larger API is available|In a tabbed browser, each tab |
Inheritance hierarchy for the interfaces| EventTarget<--Node<--Document|EventTarget<--Window|
|Interesting properties|Document.activeElement , Document.adoptedStyleSheets , Document.head , Document.body , Document.scripts , Document.styleSheets , Document.pictureInPictureElement , Document.scrollingElement , Document.plugins , Document.images , Document.links , Document.characterSet , Document.children , Document.compatMode , Document.contentType , Document.documentURI , |Window.closed , Window.document , Window.screen , Window.window , Window.frameElement , Window.frames , Window.parent , Window.history , Window.innerHeight , Window.innerWidth , Window.outerHeight , Window.outerWidth , Window.location , Window.opener|
|Interesting methods|Document.createAttribute() , Document.createElement() , Document.createEvent() , Document.exitFullscreen() , Document.exitPictureInPicture() , Document.getElementById() , Document.getElementsByClassName() , Document.getElementsByTagName() , Document.getElementsByTagNameNS() , Document.querySelector() , Document.querySelectorAll() , Document.getSelection() , Document.hasStorageAccess() , Document.hasFocus()|Window.reportError() , Window.addEventListener() , Window.removeEventListener() , Window.dispatchEvent() , Window.alert() , Window.confirm() , Window.prompt() , Window.print() , Window.stop() , Window.blur() , Window.setImmediate() , Window.clearImmediate() , Window.setInterval() , Window.clearInterval() , Window.setTimeout() , Window.clearTimeout() , Window.open() , Window.close() , Window.moveTo() , Window.resizeBy() , Window.scroll() , Window.scrollTo() , Window.getSelection()|
|Interesting events|scroll , wheel , visibilitychange , animationstart , animationend , copy , cut , paste , drag , drop , fullscreenchange , keydown , keyup , DOMContentLoaded , pointermove , selectionchange , touchmove , transitionrun|error , languagechange , deviceorientation , resize , storage , animationstart , animationend , copy , cut , paste , offline , online , focus , blur , pagehide , load , appinstalled , message , beforeprint , afterprint , unhandledrejection , rejectionhandled , transitionrun , |



#### References:
* https://developer.mozilla.org/en-US/docs/Web/API/Document
* https://developer.mozilla.org/en-US/docs/Web/API/Window

#### Misc:
* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model

#### Foot notes:
[^1]: https://stackoverflow.com/questions/6349232/whats-the-difference-between-a-global-variable-and-a-window-variable-in-javas 
[^2]: https://developer.mozilla.org/en-US/docs/Web/API/Window/window
[^3]: https://developer.mozilla.org/en-US/docs/Web/API/Window/frameElement
[^4]: https://developer.mozilla.org/en-US/docs/Web/API/Window/frames
[^5]: https://developer.mozilla.org/en-US/docs/Web/API/Window/history