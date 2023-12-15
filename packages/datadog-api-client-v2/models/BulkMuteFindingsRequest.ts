/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BulkMuteFindingsRequestData } from "./BulkMuteFindingsRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new bulk mute finding request.
 */
export class BulkMuteFindingsRequest {
  /**
   * Data object containing the new bulk mute properties of the finding.
   */
  "data": BulkMuteFindingsRequestData;

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
      type: "BulkMuteFindingsRequestData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BulkMuteFindingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
