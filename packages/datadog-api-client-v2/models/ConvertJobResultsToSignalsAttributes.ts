/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleSeverity } from "./SecurityMonitoringRuleSeverity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for converting historical job results to signals.
 */
export class ConvertJobResultsToSignalsAttributes {
  /**
   * Request ID.
   */
  "id"?: string;
  /**
   * Job result IDs.
   */
  "jobResultIds": Array<string>;
  /**
   * Notifications sent.
   */
  "notifications": Array<string>;
  /**
   * Message of generated signals.
   */
  "signalMessage": string;
  /**
   * Severity of the Security Signal.
   */
  "signalSeverity": SecurityMonitoringRuleSeverity;

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
    id: {
      baseName: "id",
      type: "string",
    },
    jobResultIds: {
      baseName: "jobResultIds",
      type: "Array<string>",
      required: true,
    },
    notifications: {
      baseName: "notifications",
      type: "Array<string>",
      required: true,
    },
    signalMessage: {
      baseName: "signalMessage",
      type: "string",
      required: true,
    },
    signalSeverity: {
      baseName: "signalSeverity",
      type: "SecurityMonitoringRuleSeverity",
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
    return ConvertJobResultsToSignalsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
