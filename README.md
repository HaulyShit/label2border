# label2border
## Label2border is a small script to fancy up your input fields. For Cross-Browsers.

Yep, it will be cooler to use input:not(:placeholder-shown) and input:placeholder-shown as jQuery... but it doesn't work everywhere.

### How To
Wrap your <input/> -field and label in a <div> or something else and give the wrapping conainer the class "label2border".
Implement the css-file.
Implement the js-file.
The Input have to be implemented first, after this the label.

<div class="label2border"> 
    <textarea name="message" value="" id="message"></textarea> 
    <label for="message">EMail</label> 
</div> <!-- /.label2border -->
The comment isn't necessary.

© Copyright by HaulyShit