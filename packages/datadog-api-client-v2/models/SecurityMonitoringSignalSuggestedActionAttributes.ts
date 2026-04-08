/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a suggested action for a security signal. The available fields depend on the action type.
 */
export class SecurityMonitoringSignalSuggestedActionAttributes {
  /**
   * The name of the investigation log query.
   */
  "name"?: string;
  /**
   * The log query filter for the investigation.
   */
  "queryFilter"?: string;
  /**
   * Template variables applied to the investigation log query, mapping attribute paths to values extracted from the signal.
   */
  "templateVariables"?: { [key: string]: Array<string> };
  /**
   * The title of the recommended blog post.
   */
  "title"?: string;
  /**
   * The URL of the suggested action.
   */
  "url"?: string;

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
    name: {
      baseName: "name",
      type: "string",
    },
    queryFilter: {
      baseName: "query_filter",
      type: "string",
    },
    templateVariables: {
      baseName: "template_variables",
      type: "{ [key: string]: Array<string>; }",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    url: {
      baseName: "url",
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
    return SecurityMonitoringSignalSuggestedActionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
