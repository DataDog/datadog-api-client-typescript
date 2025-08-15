/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSLogSourceTagFilter } from "./AWSLogSourceTagFilter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Log source configuration.
 */
export class AWSLambdaForwarderConfigLogSourceConfig {
  /**
   * List of AWS log source tag filters. Defaults to `[]`.
   */
  "tagFilters"?: Array<AWSLogSourceTagFilter>;

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
    tagFilters: {
      baseName: "tag_filters",
      type: "Array<AWSLogSourceTagFilter>",
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
    return AWSLambdaForwarderConfigLogSourceConfig.attributeTypeMap;
  }

  public constructor() {}
}
