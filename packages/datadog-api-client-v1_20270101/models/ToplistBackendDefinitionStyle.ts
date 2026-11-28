/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ToplistBackendDefinitionStyle20270101Display } from "./ToplistBackendDefinitionStyle20270101Display";
import { ToplistBackendDefinitionStyleScaling } from "./ToplistBackendDefinitionStyleScaling";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ToplistBackendDefinitionStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "display"?: ToplistBackendDefinitionStyle20270101Display;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scaling"?: ToplistBackendDefinitionStyleScaling;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    display: {
      baseName: "display",
      type: "ToplistBackendDefinitionStyle20270101Display",
    },
    palette: {
      baseName: "palette",
      type: "string",
    },
    scaling: {
      baseName: "scaling",
      type: "ToplistBackendDefinitionStyleScaling",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ToplistBackendDefinitionStyle.attributeTypeMap;
  }

  public constructor() {}
}
