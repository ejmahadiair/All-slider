<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test</title>

</head>

<body>
    <script>
        var n = parseInt(prompt("Enter a number : "), 10);
        var m;
        var temp = 0;
        for (var i = 0; i < n; i++) {
            m = parseInt(prompt("Enter number : "), 10);
            document.write(m + " ");
        }
        for (var i = 0; i < n; i++) {
            if (m[0] > m[i + 1]) {
                m = m[0];
            } else {
                temp = m[i];
                m = temp;
                m[0] = m;
            }
        }
        document.write("The max number is : " + m);
    </script>
</body>

</html>