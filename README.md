TODO: add Readme.

This is a Parcle v2 resolver plugin that resolves in a way that paths starting
with '{{' are left in tact as literal code.

In the near future I want to genericize this to be configurable with a config
file entry that let's you specify your own match criteria, e.g. regex.

This solves my problem at the moment using Parcel to build shopify CSS that
needs to embed liquid for asset urls.
