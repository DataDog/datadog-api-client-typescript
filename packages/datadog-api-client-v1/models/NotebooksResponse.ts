/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebooksResponseData } from "./NotebooksResponseData";
import { NotebooksResponseMeta } from "./NotebooksResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Notebooks get all response.
 */
export class NotebooksResponse {
  /**
   * List of notebook definitions.
   */
  "data"?: Array<NotebooksResponseData>;
  /**
   * Searches metadata returned by the API.
   */
  "meta"?: NotebooksResponseMeta;

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
      type: "Array<NotebooksResponseData>",
    },
    meta: {
      baseName: "meta",
      type: "NotebooksResponseMeta",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebooksResponse.attributeTypeMap;
  }

  public constructor() {}
}
