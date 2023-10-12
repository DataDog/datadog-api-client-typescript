/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerImageGroupImagesRelationshipsLink } from "./ContainerImageGroupImagesRelationshipsLink";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships inside a Container Image Group.
 */
export class ContainerImageGroupRelationships {
  /**
   * Relationships to Container Images inside a Container Image Group.
   */
  "containerImages"?: ContainerImageGroupImagesRelationshipsLink;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    containerImages: {
      baseName: "container_images",
      type: "ContainerImageGroupImagesRelationshipsLink",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ContainerImageGroupRelationships.attributeTypeMap;
  }

  public constructor() {}
}
