/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SalesforceIncidentsTemplateUpdateData } from "./SalesforceIncidentsTemplateUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update request for a Salesforce incident template.
 */
export class SalesforceIncidentsTemplateUpdateRequest {
  /**
   * Salesforce incident template data for an update request.
   */
  "data": SalesforceIncidentsTemplateUpdateData;

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
      type: "SalesforceIncidentsTemplateUpdateData",
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
    return SalesforceIncidentsTemplateUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
