# sheet-coll-converter

This repo is for Max/MSP users who want to be able to convert between spreadsheets and `[coll]` objects. At the moment there's only one object here:  

## [sheet-to-coll]
This object loads a spreadsheet into a `[coll]` object.  

To get started, download this repository and add it somewhere in your Max searchpath, like your "Library" folder inside your Max folder.

When you're ready to use the object, do the following:
1. Save your spreadsheet file as "tab delimited text," "tab separated values," or "comma separated values."
1. Change the file extension to .txt if necessary.

It's now ready to be read into `[sheet2coll]`.

**Note:** Max currently doesn't support .csv or .tsv extensions, so the input file must have the extension .txt. The good news is that all you have to do is change the extension of your existing file to .txt; no change in the format of the file itself is required.
