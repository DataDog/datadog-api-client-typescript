/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Salesforce organization connected to the Datadog Salesforce integration.
 */
export class SalesforceIncidentsOrganizationResponseAttributes {
  /**
   * The Salesforce instance URL used to call this organization's APIs.
   */
  "instanceUrl"?: string;
  /**
   * Human-readable name of the Salesforce organization.
   */
  "name"?: string;
  /**
   * The Salesforce organization identifier (15- or 18-character Salesforce org ID).
   */
  "sfdcOrgId"?: string;
  /**
   * The Salesforce organization type (for example, `Production` or `Sandbox`).
   */
  "sfdcOrgType"?: string;

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
    instanceUrl: {
      baseName: "instance_url",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    sfdcOrgId: {
      baseName: "sfdc_org_id",
      type: "string",
    },
    sfdcOrgType: {
      baseName: "sfdc_org_type",
      type: "string",
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
    return SalesforceIncidentsOrganizationResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
