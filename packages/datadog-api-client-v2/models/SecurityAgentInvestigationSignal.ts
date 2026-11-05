/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Summary of the signal the investigation is about.
 */
export class SecurityAgentInvestigationSignal {
  /**
   * Severity of the signal: `info`, `low`, `medium`, `high`, or `critical`.
   */
  "severity"?: string;
  /**
   * Sources of the signal.
   */
  "sources"?: Array<string>;
  /**
   * MITRE ATT&CK tactic, from the signal's `tactic` tag.
   */
  "tactic"?: string;
  /**
   * Tags of the signal, written `key:value`.
   */
  "tags"?: Array<string>;
  /**
   * MITRE ATT&CK technique, from the signal's `technique` tag.
   */
  "technique"?: string;
  /**
   * Time the signal was generated.
   */
  "timestamp"?: string;
  /**
   * Title of the signal.
   */
  "title"?: string;

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
    severity: {
      baseName: "severity",
      type: "string",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
    },
    tactic: {
      baseName: "tactic",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    technique: {
      baseName: "technique",
      type: "string",
    },
    timestamp: {
      baseName: "timestamp",
      type: "string",
    },
    title: {
      baseName: "title",
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
    return SecurityAgentInvestigationSignal.attributeTypeMap;
  }

  public constructor() {}
}
