/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ResolveVulnerableSymbolsResponseData } from "./ResolveVulnerableSymbolsResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The top-level response object returned when resolving vulnerable symbols for a set of packages.
 */
export class ResolveVulnerableSymbolsResponse {
  /**
   * The data object in a response for resolving vulnerable symbols, containing the result attributes and response type.
   */
  "data"?: ResolveVulnerableSymbolsResponseData;

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
      type: "ResolveVulnerableSymbolsResponseData",
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
    return ResolveVulnerableSymbolsResponse.attributeTypeMap;
  }

  public constructor() {}
}
