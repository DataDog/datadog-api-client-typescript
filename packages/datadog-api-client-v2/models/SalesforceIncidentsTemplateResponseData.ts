/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SalesforceIncidentsTemplateResponseAttributes } from "./SalesforceIncidentsTemplateResponseAttributes";
import { SalesforceIncidentsTemplateType } from "./SalesforceIncidentsTemplateType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Salesforce incident template data from a response.
 */
export class SalesforceIncidentsTemplateResponseData {
  /**
   * Salesforce incident template attributes returned by the API.
   */
  "attributes": SalesforceIncidentsTemplateResponseAttributes;
  /**
   * The ID of the Salesforce incident template.
   */
  "id": string;
  /**
   * Salesforce incident template resource type.
   */
  "type": SalesforceIncidentsTemplateType;

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
      type: "SalesforceIncidentsTemplateResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SalesforceIncidentsTemplateType",
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
    return SalesforceIncidentsTemplateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
