/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SalesforceIncidentsOrganizationResponseAttributes } from "./SalesforceIncidentsOrganizationResponseAttributes";
import { SalesforceIncidentsOrganizationType } from "./SalesforceIncidentsOrganizationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Salesforce organization data from a response.
 */
export class SalesforceIncidentsOrganizationResponseData {
  /**
   * Attributes of a Salesforce organization connected to the Datadog Salesforce integration.
   */
  "attributes": SalesforceIncidentsOrganizationResponseAttributes;
  /**
   * The Datadog-assigned ID of the connected Salesforce organization.
   */
  "id": string;
  /**
   * Salesforce organization resource type.
   */
  "type": SalesforceIncidentsOrganizationType;

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
      type: "SalesforceIncidentsOrganizationResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SalesforceIncidentsOrganizationType",
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
    return SalesforceIncidentsOrganizationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
