/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ResolveVulnerableSymbolsResponseDataAttributes } from "./ResolveVulnerableSymbolsResponseDataAttributes";
import { ResolveVulnerableSymbolsResponseDataType } from "./ResolveVulnerableSymbolsResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object in a response for resolving vulnerable symbols, containing the result attributes and response type.
 */
export class ResolveVulnerableSymbolsResponseData {
  /**
   * The attributes of a response containing resolved vulnerable symbols, organized by package.
   */
  "attributes"?: ResolveVulnerableSymbolsResponseDataAttributes;
  /**
   * The unique identifier for this response data object.
   */
  "id"?: string;
  /**
   * The type identifier for responses containing resolved vulnerable symbols.
   */
  "type": ResolveVulnerableSymbolsResponseDataType;

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
      type: "ResolveVulnerableSymbolsResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ResolveVulnerableSymbolsResponseDataType",
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
    return ResolveVulnerableSymbolsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
