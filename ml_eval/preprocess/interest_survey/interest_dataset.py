# Data processing
import pandas as pd
import numpy as np

# Utility
from typing import List

class InterestSurveyDataset:
    def __init__(self, file: str):
        self._df: pd.DataFrame = pd.read_csv(file)

        extracurricular_keys: List[str] = self._get_df_keys_prefixed("Extracurricular: ")
        ethnic_id_keys: List[str] = self._get_df_keys_prefixed("Ethnic Identity: ")
        faith_keys: List[str] = self._get_df_keys_prefixed("Faith: ")
        activity_keys: List[str] = self._get_df_keys_prefixed("Activity: ")
        availability_keys: List[str] = self._get_df_keys_prefixed("Time Available: ")
        achieve_keys: List[str] = self._get_df_keys_prefixed("Hope to Achieve: ")
        remind_keys: List[str] = self._get_df_keys_prefixed("Remind Preference: ")
        major_keys: List[str] = self._get_df_keys_prefixed("Major: ")

        join_ethnic_keys: List[str] = self._get_df_keys_prefixed("Join Ethnic Group: ")
        join_faith_keys: List[str] = self._get_df_keys_prefixed("Join Faith Group: ")
        attend_freq_keys: List[str] = self._get_df_keys_prefixed("Attendance Frequency: ")
        academic_keys: List[str] = self._get_df_keys_prefixed("Events for Academic Support: ")
        diversity_keys: List[str] = self._get_df_keys_prefixed("Events for Diversity and Inclusion: ")
        
        # Feature keys in order
        self._feature_keys: List[str] = \
            extracurricular_keys + \
            ethnic_id_keys + \
            faith_keys + \
            activity_keys + \
            availability_keys + \
            achieve_keys + \
            remind_keys + \
            major_keys + \
            join_ethnic_keys + \
            join_faith_keys + \
            attend_freq_keys + \
            academic_keys + \
            diversity_keys
        
    def _get_df_keys_prefixed(self, item: str) -> List[str]:
        return [
            key for key in self._df.keys()
            if item==key[:len(item)]
        ]

    def __len__(self) -> int:
        return len(self._df)
    
    def __getitem__(self, idx: int) -> np.array:
        row: pd.Series = self._df.iloc[idx]
        return np.array(
            [row[key] for key in self._feature_keys]
        )
    
    def get_feature_names(self) -> List[str]:
        return self._feature_keys.copy()

if __name__=="__main__":
    dataset = InterestSurveyDataset("../../datasets/orgxplor_interest_responses_processed.csv")
    print("Feature Names:\n\t" + "\n\t".join(dataset.get_feature_names()))

    print(f"dataset[0]: {dataset[0]}")
    print(f"len(dataset): {len(dataset)}")