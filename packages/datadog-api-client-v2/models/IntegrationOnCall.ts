/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IntegrationOnCallEscalationQueriesItems } from "./IntegrationOnCallEscalationQueriesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * On-Call integration settings
 */
export class IntegrationOnCall {
  /**
   * Whether to auto-assign on-call
   */
  "autoAssignOnCall"?: boolean;
  /**
   * Whether On-Call integration is enabled
   */
  "enabled"?: boolean;
  "escalationQueries"?: Array<IntegrationOnCallEscalationQueriesItems>;

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
    autoAssignOnCall: {
      baseName: "auto_assign_on_call",
      type: "boolean",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    escalationQueries: {
      baseName: "escalation_queries",
      type: "Array<IntegrationOnCallEscalationQueriesItems>",
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
    return IntegrationOnCall.attributeTypeMap;
  }

  public constructor() {}
}
