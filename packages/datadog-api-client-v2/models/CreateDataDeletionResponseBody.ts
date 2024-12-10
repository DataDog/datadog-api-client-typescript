/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DataDeletionResponseItem } from "./DataDeletionResponseItem";
import { DataDeletionResponseMeta } from "./DataDeletionResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response from the create data deletion request endpoint.
 */
export class CreateDataDeletionResponseBody {
  /**
   * The created data deletion request information.
   */
  "data"?: DataDeletionResponseItem;
  /**
   * The metadata of the data deletion response.
   */
  "meta"?: DataDeletionResponseMeta;

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
    data: {
      baseName: "data",
      type: "DataDeletionResponseItem",
    },
    meta: {
      baseName: "meta",
      type: "DataDeletionResponseMeta",
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
    return CreateDataDeletionResponseBody.attributeTypeMap;
  }

  public constructor() {}
}
