/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ResolveVulnerableSymbolsRequestDataAttributes } from "./ResolveVulnerableSymbolsRequestDataAttributes";
import { ResolveVulnerableSymbolsRequestDataType } from "./ResolveVulnerableSymbolsRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ResolveVulnerableSymbolsRequestData` object.
 */
export class ResolveVulnerableSymbolsRequestData {
  /**
   * The definition of `ResolveVulnerableSymbolsRequestDataAttributes` object.
   */
  "attributes"?: ResolveVulnerableSymbolsRequestDataAttributes;
  /**
   * The `ResolveVulnerableSymbolsRequestData` `id`.
   */
  "id"?: string;
  /**
   * Resolve vulnerable symbols request resource type.
   */
  "type": ResolveVulnerableSymbolsRequestDataType;

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
      type: "ResolveVulnerableSymbolsRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ResolveVulnerableSymbolsRequestDataType",
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
    return ResolveVulnerableSymbolsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
