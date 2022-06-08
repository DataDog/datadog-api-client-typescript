/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebooksResponsePage } from "./NotebooksResponsePage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Searches metadata returned by the API.
 */
export class NotebooksResponseMeta {
  /**
   * Pagination metadata returned by the API.
   */
  "page"?: NotebooksResponsePage;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    page: {
      baseName: "page",
      type: "NotebooksResponsePage",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebooksResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
