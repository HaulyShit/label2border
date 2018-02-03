<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">

        <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
        Remove this if you use the .htaccess -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <title>HTML</title>
        <meta name="description" content="">
        <meta name="author" content="HaulyShit">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

        <!-- Replace favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
        <link rel="shortcut icon" href="/favicon.ico">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="stylesheet" href="assets/css/label2border.css" type="text/css" media="screen" title="no title" charset="utf-8"/>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
    </head>

    <body>
        <div>
            <header>
                <h1>Label2border</h1>
            </header>

            <article>
                <h3> Label2border is a small script to fancy up your input fields. For Cross-Browsers. </h3>

                <p>
                    Yep, it will be cooler to use <code>
                        input:not(:placeholder-shown)</code>
                    and <code>
                        input:placeholder-shown</code>
                    as jQuery... but it doesn't work everywhere.
                </p>

                <form>
                    <h2>Demo Form</h2>

                    <div class="label2border  [ dp--ib ]">
                        <input type="text" name="Name" value="" id="Name" />
                        <label for="Name">Name</label>
                    </div>
                    <!-- /.label2border -->

                    <div class="label2border  [ dp--ib ]">
                        <input type="email" name="email" value="" id="email" />
                        <label for="email">EMail</label>
                    </div>
                    <!-- /.label2border -->

                    <div class="label2border">
                        <textarea name="message" value="" id="message"></textarea>
                        <label for="message">EMail</label>
                    </div>
                    <!-- /.label2border -->

                </form>

                <h3>How To</h3>
                <ol>
                    <li>
                        Wrap your <code>
                            &lt;input/&gt;</code>
                        -field and label in a <code>
                            &lt;div&gt;</code>
                        or something else and give the wrapping conainer the class "label2border".
                    </li>
                    <li>
                        Implement the css-file.
                    </li>
                    <li>
                        Implement the js-file.
                    </li>
                </ol>
                <p>
                    The Input have to be implemented first, after this the label.
                </p>

                <code>
                    &lt;div class=&quot;label2border&quot;&gt;
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;textarea name=&quot;message&quot; value=&quot;&quot; id=&quot;message&quot;&gt;&lt;/textarea&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;label for=&quot;message&quot;&gt;EMail&lt;/label&gt;
                    <br />
                    &lt;/div&gt; &lt;!-- /.label2border --&gt;
                </code>

                <p>
                    The comment isn't necessary.
                </p>
            </article>

            <footer>
                <p>
                    &copy; Copyright  by HaulyShit
                </p>
            </footer>
        </div>

        <script src="assets/js/dest/label2border.jQuery.min.js" type="text/javascript" charset="utf-8"></script>
    </body>
</html>
