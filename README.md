### Application Issues

The application is currently experiencing several issues that need to be addressed:

## ComingSoon Component Import Error
The ComingSoon component was not imported correctly and was not displaying on the page as expected.

It was not exported correctly.

```
export default function comingSoon() {}
```



## Negative Counter Values

The Counter component was negative values, which is not the expected behavior. If the time for the counter has already ended, the component should display a message, link, or button instead.

I have put a condition to check the time remaining is < 0

```
  if (remaining < 0) {
        clearInterval(clockInterval);
        setClockData({
          dd: 0,
          hh: 0,
          mm: 0,
          ss: 0
        });
        return;
      }
```

I have also checked if the count down has ended 

```
 const countDownEnded = clockData.dd === 0 && clockData.hh === 0 && clockData.mm === 0 && clockData.ss === 0;

```


## Email Regex Trim Function Bugs

The SubscriptionForm file several bugs that need to be fixed. Currently, it is not properly validating email addresses, and it is not handling empty values correctly.

Use ES6 for useState and useRef:

Instead of using var or let we should use const for more concise and error free code. 

```
const [email, setEmail] = useState('');
const [alertClass, setAlertClass] = useState('');
const parentComp = useRef();
```

I have used async await for the handle submit function

I have also improved the promise state and put everything in try catch

The promise state is also improved instead of JSON.parse(`${data}`) I have used res.json() which is shorter and less error-prone

The trip function does not take any argument. So we can write it like

```
email.trim()
```

I have also moved the email regex on the top so that it will be easier to read and change in future. 

I have also Improved the error message.

## Toast Notification Bug
The Toast notification system is not working as expected due to a bug in the hitToast function.

I have swapped the order of the message and variant according to their use in the function. 