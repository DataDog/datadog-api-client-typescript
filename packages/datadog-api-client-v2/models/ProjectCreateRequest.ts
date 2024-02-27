/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProjectCreate } from "./ProjectCreate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Project create request
 */
export class ProjectCreateRequest {
  /**
   * Project create
   */
  "data": ProjectCreate;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "ProjectCreate",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProjectCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
