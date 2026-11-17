import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { Container } from "./Container";
import { ContainerAttributes } from "./ContainerAttributes";
import { ContainerGroup } from "./ContainerGroup";
import { ContainerGroupAttributes } from "./ContainerGroupAttributes";
import { ContainerGroupRelationships } from "./ContainerGroupRelationships";
import { ContainerGroupRelationshipsLink } from "./ContainerGroupRelationshipsLink";
import { ContainerGroupRelationshipsLinks } from "./ContainerGroupRelationshipsLinks";
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
import { ContainerMeta } from "./ContainerMeta";
import { ContainerMetaPage } from "./ContainerMetaPage";
import { ContainersResponse } from "./ContainersResponse";
import { ContainersResponseLinks } from "./ContainersResponseLinks";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ContainerGroupType: ["container_group"],
    ContainerImageGroupType: ["container_image_group"],
    ContainerImageMetaPageType: ["cursor_limit"],
    ContainerImageType: ["container_image"],
    ContainerMetaPageType: ["cursor_limit"],
    ContainerType: ["container"],
  },
  oneOfMap: {
    ContainerImageItem: ["ContainerImage", "ContainerImageGroup"],
    ContainerItem: ["Container", "ContainerGroup"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Container: Container,
    ContainerAttributes: ContainerAttributes,
    ContainerGroup: ContainerGroup,
    ContainerGroupAttributes: ContainerGroupAttributes,
    ContainerGroupRelationships: ContainerGroupRelationships,
    ContainerGroupRelationshipsLink: ContainerGroupRelationshipsLink,
    ContainerGroupRelationshipsLinks: ContainerGroupRelationshipsLinks,
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
    ContainerMeta: ContainerMeta,
    ContainerMetaPage: ContainerMetaPage,
    ContainersResponse: ContainersResponse,
    ContainersResponseLinks: ContainersResponseLinks,
  },
};
