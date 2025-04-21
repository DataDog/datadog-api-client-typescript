import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Container } from "./Container";
import { ContainerAttributes } from "./ContainerAttributes";
import { ContainerGroup } from "./ContainerGroup";
import { ContainerGroupAttributes } from "./ContainerGroupAttributes";
import { ContainerGroupRelationships } from "./ContainerGroupRelationships";
import { ContainerGroupRelationshipsLink } from "./ContainerGroupRelationshipsLink";
import { ContainerGroupRelationshipsLinks } from "./ContainerGroupRelationshipsLinks";
import { ContainerMeta } from "./ContainerMeta";
import { ContainerMetaPage } from "./ContainerMetaPage";
import { ContainersResponse } from "./ContainersResponse";
import { ContainersResponseLinks } from "./ContainersResponseLinks";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ContainerGroupType: ["container_group"],
    ContainerMetaPageType: ["cursor_limit"],
    ContainerType: ["container"],
  },
  oneOfMap: {
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
    ContainerMeta: ContainerMeta,
    ContainerMetaPage: ContainerMetaPage,
    ContainersResponse: ContainersResponse,
    ContainersResponseLinks: ContainersResponseLinks,
  },
};
