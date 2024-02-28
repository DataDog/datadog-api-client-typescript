/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageAttributionBody } from "./UsageAttributionBody";
import { UsageAttributionMetadata } from "./UsageAttributionMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the Usage Summary by tag(s).
 */
export class UsageAttributionResponse {
  /**
   * The object containing document metadata.
   */
  "metadata"?: UsageAttributionMetadata;
  /**
   * Get usage summary by tag(s).
   */
  "usage"?: Array<UsageAttributionBody>;

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
    metadata: {
      baseName: "metadata",
      type: "UsageAttributionMetadata",
    },
    usage: {
      baseName: "usage",
      type: "Array<UsageAttributionBody>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageAttributionResponse.attributeTypeMap;
  }

  public constructor() {}
}
