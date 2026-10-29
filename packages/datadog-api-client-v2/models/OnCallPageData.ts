/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallPageDataAttributes } from "./OnCallPageDataAttributes";
import { OnCallPageDataRelationships } from "./OnCallPageDataRelationships";
import { OnCallPageDataType } from "./OnCallPageDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An On-Call Page.
 */
export class OnCallPageData {
  /**
   * The attributes of an On-Call Page.
   */
  "attributes"?: OnCallPageDataAttributes;
  /**
   * The unique ID of the Page.
   */
  "id": string;
  /**
   * The relationships of an On-Call Page.
   */
  "relationships"?: OnCallPageDataRelationships;
  /**
   * Indicates that the resource is of type `pages`.
   */
  "type": OnCallPageDataType;

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
    attributes: {
      baseName: "attributes",
      type: "OnCallPageDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "OnCallPageDataRelationships",
    },
    type: {
      baseName: "type",
      type: "OnCallPageDataType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OnCallPageData.attributeTypeMap;
  }

  public constructor() {}
}
