/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WildcardSpecificationType } from "./WildcardSpecificationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WildcardBackendDefinitionSpecification {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "contents": { [key: string]: any };
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": WildcardSpecificationType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    contents: {
      baseName: "contents",
      type: "{ [key: string]: any; }",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WildcardSpecificationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WildcardBackendDefinitionSpecification.attributeTypeMap;
  }

  public constructor() {}
}
