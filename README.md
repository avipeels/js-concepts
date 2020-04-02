# js-concepts

# rules for determining which binding

1. was the fn called with new?
2. was the fn called with call or apply with explicit 'this'?
3. was the fn called via a containing object(context)?
4. default global object (non-strict mode)?