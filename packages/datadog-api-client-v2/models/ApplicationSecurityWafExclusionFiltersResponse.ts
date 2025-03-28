/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityWafExclusionFilterResource } from "./ApplicationSecurityWafExclusionFilterResource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object for multiple WAF exclusion filters.
 */
export class ApplicationSecurityWafExclusionFiltersResponse {
  /**
   * A list of WAF exclusion filters.
   */
  "data"?: Array<ApplicationSecurityWafExclusionFilterResource>;

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
      type: "Array<ApplicationSecurityWafExclusionFilterResource>",
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
    return ApplicationSecurityWafExclusionFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
