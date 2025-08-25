/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerImageGroupRelationshipsLinks } from "./ContainerImageGroupRelationshipsLinks";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships to Container Images inside a Container Image Group.
 */
export class ContainerImageGroupImagesRelationshipsLink {
  /**
   * Links data.
   */
  "data"?: Array<string>;
  /**
   * Links attributes.
   */
  "links"?: ContainerImageGroupRelationshipsLinks;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<string>",
    },
    links: {
      baseName: "links",
      type: "ContainerImageGroupRelationshipsLinks",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ContainerImageGroupImagesRelationshipsLink.attributeTypeMap;
  }

  public constructor() {}
}
