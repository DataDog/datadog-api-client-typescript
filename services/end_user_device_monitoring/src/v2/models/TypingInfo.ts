import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DeviceBaseArray } from "./DeviceBaseArray";
import { DeviceBaseData } from "./DeviceBaseData";
import { DeviceBaseDataAttributes } from "./DeviceBaseDataAttributes";
import { DeviceDetails } from "./DeviceDetails";
import { DeviceDetailsData } from "./DeviceDetailsData";
import { DeviceDetailsDataAttributes } from "./DeviceDetailsDataAttributes";
import { GraphItemArray } from "./GraphItemArray";
import { GraphItemData } from "./GraphItemData";
import { GraphItemDataAttributes } from "./GraphItemDataAttributes";
import { GraphItemDataAttributesCountsItems } from "./GraphItemDataAttributesCountsItems";
import { IssueDefinitionArray } from "./IssueDefinitionArray";
import { IssueDefinitionData } from "./IssueDefinitionData";
import { IssueDefinitionDataAttributes } from "./IssueDefinitionDataAttributes";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { OverviewItemArray } from "./OverviewItemArray";
import { OverviewItemData } from "./OverviewItemData";
import { OverviewItemDataAttributes } from "./OverviewItemDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DeviceDetailsDataType: ["devices"],
    GraphItemDataType: ["graph_items"],
    IssueDefinitionDataType: ["issue_definitions"],
    OverviewItemDataType: ["overview_items"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DeviceBaseArray: DeviceBaseArray,
    DeviceBaseData: DeviceBaseData,
    DeviceBaseDataAttributes: DeviceBaseDataAttributes,
    DeviceDetails: DeviceDetails,
    DeviceDetailsData: DeviceDetailsData,
    DeviceDetailsDataAttributes: DeviceDetailsDataAttributes,
    GraphItemArray: GraphItemArray,
    GraphItemData: GraphItemData,
    GraphItemDataAttributes: GraphItemDataAttributes,
    GraphItemDataAttributesCountsItems: GraphItemDataAttributesCountsItems,
    IssueDefinitionArray: IssueDefinitionArray,
    IssueDefinitionData: IssueDefinitionData,
    IssueDefinitionDataAttributes: IssueDefinitionDataAttributes,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    OverviewItemArray: OverviewItemArray,
    OverviewItemData: OverviewItemData,
    OverviewItemDataAttributes: OverviewItemDataAttributes,
  },
};
