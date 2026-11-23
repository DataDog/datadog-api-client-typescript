/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A case linked to a security signal.
 */
export class SecurityMonitoringSignalCase {
  /**
   * The UUID of the user assigned to the case.
   */
  "assigneeId"?: string;
  /**
   * The name of the user assigned to the case.
   */
  "assigneeName"?: string;
  /**
   * The unique ID of the case.
   */
  "id"?: string;
  /**
   * The key of the case.
   */
  "key"?: string;
  /**
   * The status of the case.
   */
  "status"?: string;
  /**
   * The title of the case.
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
    assigneeId: {
      baseName: "assigneeId",
      type: "string",
    },
    assigneeName: {
      baseName: "assigneeName",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    key: {
      baseName: "key",
      type: "string",
    },
    status: {
      baseName: "status",
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
    return SecurityMonitoringSignalCase.attributeTypeMap;
  }

  public constructor() {}
}
