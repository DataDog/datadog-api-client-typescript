/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPageEmailAccessPolicyDataRelationshipsCreatedByUser } from "./StatusPageEmailAccessPolicyDataRelationshipsCreatedByUser";
import { StatusPageEmailAccessPolicyDataRelationshipsStatusPage } from "./StatusPageEmailAccessPolicyDataRelationshipsStatusPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of a status page email access policy.
 */
export class StatusPageEmailAccessPolicyDataRelationships {
  /**
   * The Datadog user who created the email access policy.
   */
  "createdByUser": StatusPageEmailAccessPolicyDataRelationshipsCreatedByUser;
  /**
   * The status page associated with the email access policy.
   */
  "statusPage": StatusPageEmailAccessPolicyDataRelationshipsStatusPage;

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
    createdByUser: {
      baseName: "created_by_user",
      type: "StatusPageEmailAccessPolicyDataRelationshipsCreatedByUser",
      required: true,
    },
    statusPage: {
      baseName: "status_page",
      type: "StatusPageEmailAccessPolicyDataRelationshipsStatusPage",
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
    return StatusPageEmailAccessPolicyDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
