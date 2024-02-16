/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CasePriority } from "./CasePriority";
import { CaseType } from "./CaseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Case creation attributes
 */
export class CaseCreateAttributes {
  /**
   * Description
   */
  "description"?: string;
  /**
   * Case priority
   */
  "priority"?: CasePriority;
  /**
   * Title
   */
  "title": string;
  /**
   * Case type
   */
  "type": CaseType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    priority: {
      baseName: "priority",
      type: "CasePriority",
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CaseCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}