# Google Drive "Auto-Reflect" Setup

To allow your website to automatically show new photos from your Google Drive folder, follow these steps to create a small "bridge" API.

## Step 1: Create the Google Apps Script

1. Go to [script.google.com](https://script.google.com/).
2. Click **New Project**.
3. Delete any code in the editor and paste the following:

```javascript
function doGet() {
  // Your Google Drive Folder ID
  var folderId = "1KztLZjzs4wkBh9Sa8rkuaWpZhmPJfbNz"; 
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  var result = [];
  
  while (files.hasNext()) {
    var file = files.next();
    // Only include images
    if (file.getMimeType().indexOf("image/") !== -1) {
      result.push({
        id: file.getId(),
        name: file.getName()
      });
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 2: Deploy the Script

1. Click the **Deploy** button at the top right -> **New deployment**.
2. Select type: **Web app**.
3. **Description**: Google Drive Image API.
4. **Execute as**: Me.
5. **Who has access**: Anyone. (This is necessary for the website to fetch the data).
6. Click **Deploy**.
7. You will be asked to **Authorize access**. Grant the permissions.
8. **Copy the Web App URL** provided at the end.

## Step 3: Link it to your Website

1. Open `src/components/Portfolio.jsx`.
2. Find the line: `const GDRIVE_SCRIPT_URL = "";`
3. Paste your copied URL inside the quotes.

```javascript
const GDRIVE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
```

## How it works
- Whenever you upload a photo to the folder `1KztLZjzs4wkBh9Sa8rkuaWpZhmPJfbNz`, it will automatically appear in your portfolio.
- The website fetches the list of files every time it loads.
- If the fetch fails or you haven't set up the URL yet, it will fall back to your local images.
