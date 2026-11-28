/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeDirectionality } from "./ChangeDirectionality";
import { ChangeDuration } from "./ChangeDuration";
import { ChangeLayout } from "./ChangeLayout";
import { ChangeType } from "./ChangeType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ComparisonRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "directionality"?: ChangeDirectionality;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "duration": ChangeDuration;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "layout"?: ChangeLayout;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type"?: ChangeType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    directionality: {
      baseName: "directionality",
      type: "ChangeDirectionality",
    },
    duration: {
      baseName: "duration",
      type: "ChangeDuration",
      required: true,
    },
    layout: {
      baseName: "layout",
      type: "ChangeLayout",
    },
    type: {
      baseName: "type",
      type: "ChangeType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ComparisonRequest.attributeTypeMap;
  }

  public constructor() {}
}
