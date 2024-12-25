import { createMockPhotoData } from "./createData.js";
import { initPhotoGallery } from "./picturesRenderer.js";
import { initBigPictureFeature } from "./bigPictureRenderer.js";

const photosData = createMockPhotoData();
initPhotoGallery(photosData);
initBigPictureFeature(photosData);
