import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ContainerImage } from "./ContainerImage";
import { ContainerImageAttributes } from "./ContainerImageAttributes";
import { ContainerImageFlavor } from "./ContainerImageFlavor";
import { ContainerImageGroup } from "./ContainerImageGroup";
import { ContainerImageGroupAttributes } from "./ContainerImageGroupAttributes";
import { ContainerImageGroupImagesRelationshipsLink } from "./ContainerImageGroupImagesRelationshipsLink";
import { ContainerImageGroupRelationships } from "./ContainerImageGroupRelationships";
import { ContainerImageGroupRelationshipsLinks } from "./ContainerImageGroupRelationshipsLinks";
import { ContainerImageMeta } from "./ContainerImageMeta";
import { ContainerImageMetaPage } from "./ContainerImageMetaPage";
import { ContainerImageVulnerabilities } from "./ContainerImageVulnerabilities";
import { ContainerImagesResponse } from "./ContainerImagesResponse";
import { ContainerImagesResponseLinks } from "./ContainerImagesResponseLinks";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ContainerImageGroupType: ["container_image_group"],
    ContainerImageMetaPageType: ["cursor_limit"],
    ContainerImageType: ["container_image"],
  },
  oneOfMap: {
    ContainerImageItem: ["ContainerImage", "ContainerImageGroup"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ContainerImage: ContainerImage,
    ContainerImageAttributes: ContainerImageAttributes,
    ContainerImageFlavor: ContainerImageFlavor,
    ContainerImageGroup: ContainerImageGroup,
    ContainerImageGroupAttributes: ContainerImageGroupAttributes,
    ContainerImageGroupImagesRelationshipsLink:
      ContainerImageGroupImagesRelationshipsLink,
    ContainerImageGroupRelationships: ContainerImageGroupRelationships,
    ContainerImageGroupRelationshipsLinks:
      ContainerImageGroupRelationshipsLinks,
    ContainerImageMeta: ContainerImageMeta,
    ContainerImageMetaPage: ContainerImageMetaPage,
    ContainerImageVulnerabilities: ContainerImageVulnerabilities,
    ContainerImagesResponse: ContainerImagesResponse,
    ContainerImagesResponseLinks: ContainerImagesResponseLinks,
  },
};
